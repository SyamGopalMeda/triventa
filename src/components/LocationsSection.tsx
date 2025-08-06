import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { MapPin, Phone, Mail, Building } from 'lucide-react';

// Define locations with real coordinates
const locations = [
  {
    id: 1,
    address: "#401, Maruti Grandeurs, Banjara Hills, Hyderabad 500034",
    city: "Hyderabad",
    type: "Corporate Office",
    coordinates: { lat: 17.4126, lng: 78.4392 }, // Real coordinates for Banjara Hills, Hyderabad
    phone: "+91 8367228888",
    email: "ceo@triventagroup.com"
  },
  {
    id: 2,
    address: "#408, Aparna Green, Financial District, Hyderabad 500032",
    city: "Hyderabad",
    type: "Business Center",
    coordinates: { lat: 17.4239, lng: 78.3957 }, // Real coordinates for Financial District, Hyderabad
    phone: "+91 8367228888",
    email: "business@triventagroup.com"
  },
  {
    id: 3,
    address: "D.No. 3654/1, Kolanukonda Road, Undavalli, Amaravati 522501",
    city: "Amaravati",
    type: "Regional Office",
    coordinates: { lat: 16.5193, lng: 80.5932 }, // Real coordinates for Undavalli, Amaravati
    phone: "+91 8367228888",
    email: "amaravati@triventagroup.com"
  }
];

// Custom hook for Leaflet Maps
const useLeafletMaps = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    // Check if Leaflet is already loaded
    if (window.L) {
      setIsLoaded(true);
      return;
    }

    // Load Leaflet CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
    document.head.appendChild(cssLink);

    // Load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
    script.async = true;

    script.onload = () => {
      setIsLoaded(true);
    };

    script.onerror = () => {
      setLoadError('Failed to load map library');
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (cssLink.parentNode) {
        cssLink.parentNode.removeChild(cssLink);
      }
    };
  }, []);

  return { isLoaded, loadError };
};

// Leaflet Map Component
const LeafletMapComponent: React.FC<{
  selectedLocation: number | null;
  onLocationSelect: (id: number | null) => void;
  onPinHover: (id: number | null) => void;
}> = ({ selectedLocation, onLocationSelect, onPinHover }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<{ [key: number]: any }>({});
  const { isLoaded, loadError } = useLeafletMaps();

  const initializeMap = useCallback(() => {
    if (!mapRef.current || !window.L) return;

    // Calculate center point from all locations
    const lats = locations.map(loc => loc.coordinates.lat);
    const lngs = locations.map(loc => loc.coordinates.lng);
    const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;
    const centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2;

    // Initialize map
    const map = window.L.map(mapRef.current).setView([centerLat, centerLng], 8);

    // Add OpenStreetMap tiles
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    mapInstanceRef.current = map;

    // Create custom icon
    const createCustomIcon = (isSelected: boolean, isHovered: boolean) => {
      const color = isSelected ? '#fbbf24' : isHovered ? '#60a5fa' : '#3b82f6';
      return window.L.divIcon({
        html: `
          <div style="
            width: 30px;
            height: 30px;
            background: ${color};
            border: 3px solid white;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              width: 8px;
              height: 8px;
              background: white;
              border-radius: 50%;
              transform: rotate(45deg);
            "></div>
          </div>
        `,
        className: 'custom-leaflet-marker',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
      });
    };

    // Add markers for each location
    locations.forEach((location) => {
      const marker = window.L.marker(
        [location.coordinates.lat, location.coordinates.lng],
        {
          icon: createCustomIcon(selectedLocation === location.id, false)
        }
      ).addTo(map);

      // Store marker reference
      markersRef.current[location.id] = marker;

      // Create popup content
      const popupContent = `
        <div style="padding: 10px; max-width: 300px; font-family: Arial, sans-serif;">
          <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
            ${location.type}
          </h3>
          <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px; line-height: 1.4;">
            ${location.address}
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin: 8px 0;">
            <span style="background: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 12px; font-size: 12px;">
              ${location.city}
            </span>
          </div>
          <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #e5e7eb;">
            <div style="margin-bottom: 6px;">
              <a href="tel:${location.phone}" style="color: #059669; text-decoration: none; font-size: 14px;">
                📞 ${location.phone}
              </a>
            </div>
            <div>
              <a href="mailto:${location.email}" style="color: #3b82f6; text-decoration: none; font-size: 14px;">
                ✉️ ${location.email}
              </a>
            </div>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);

      // Add click listener
      marker.on('click', () => {
        const newSelection = selectedLocation === location.id ? null : location.id;
        onLocationSelect(newSelection);
      });

      // Add hover listeners
      marker.on('mouseover', () => {
        onPinHover(location.id);
        marker.setIcon(createCustomIcon(selectedLocation === location.id, true));
      });

      marker.on('mouseout', () => {
        onPinHover(null);
        marker.setIcon(createCustomIcon(selectedLocation === location.id, false));
      });
    });

    // Fit map to show all markers
    const group = new window.L.featureGroup(Object.values(markersRef.current));
    map.fitBounds(group.getBounds().pad(0.1));

  }, [selectedLocation, onLocationSelect, onPinHover]);

  // Update marker icons when selectedLocation changes
  useEffect(() => {
    if (!isLoaded || !window.L) return;

    Object.entries(markersRef.current).forEach(([id, marker]) => {
      const locationId = parseInt(id);
      const createCustomIcon = (isSelected: boolean, isHovered: boolean) => {
        const color = isSelected ? '#fbbf24' : isHovered ? '#60a5fa' : '#3b82f6';
        return window.L.divIcon({
          html: `
            <div style="
              width: 30px;
              height: 30px;
              background: ${color};
              border: 3px solid white;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              box-shadow: 0 4px 8px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <div style="
                width: 8px;
                height: 8px;
                background: white;
                border-radius: 50%;
                transform: rotate(45deg);
              "></div>
            </div>
          `,
          className: 'custom-leaflet-marker',
          iconSize: [30, 30],
          iconAnchor: [15, 30],
          popupAnchor: [0, -30]
        });
      };

      marker.setIcon(createCustomIcon(selectedLocation === locationId, false));

      // Auto-open popup for selected location
      if (selectedLocation === locationId) {
        marker.openPopup();
      } else {
        marker.closePopup();
      }
    });
  }, [selectedLocation, isLoaded]);

  // Initialize map when Leaflet loads
  useEffect(() => {
    if (isLoaded) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        initializeMap();
      }, 100);
    }
  }, [isLoaded, initializeMap]);

  if (loadError) {
    return (
      <div className="w-full h-80 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center">
        <div className="text-center p-6">
          <p className="text-red-600 font-semibold mb-2">Failed to load map</p>
          <p className="text-red-500 text-sm">Please check your internet connection and try again</p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
        <div className="text-center p-6">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-blue-600 font-semibold">Loading Interactive Map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export const LocationsSection: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [hoveredPin, setHoveredPin] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically located across key business hubs in Telangana and Andhra Pradesh
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection animation="slideLeft">
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Interactive Map
                </h3>

                {/* Real World Map Container */}
                <LeafletMapComponent
                  selectedLocation={selectedLocation}
                  onLocationSelect={setSelectedLocation}
                  onPinHover={setHoveredPin}
                />

                {/* Map Legend */}
                <div className="mt-4 flex items-center justify-center space-x-6 text-sm text-white/80">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-yellow-400" />
                    <span>Click pins for details</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white/30 rounded-full mr-1 animate-pulse"></div>
                    <span>Active locations</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideRight" className="space-y-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 cursor-pointer ${selectedLocation === location.id
                  ? 'border-blue-500 scale-105 shadow-2xl'
                  : 'border-gray-100 hover:scale-102'
                  }`}
                onClick={() => setSelectedLocation(selectedLocation === location.id ? null : location.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full transition-all duration-300 ${selectedLocation === location.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-110'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500'
                    }`}>
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 mb-1">{location.type}</h4>
                    <p className="text-gray-600 mb-3 leading-relaxed">{location.address}</p>

                    <div className="flex items-center space-x-4 mb-3">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {location.city}
                      </span>
                    </div>

                    {/* Contact Details - Show when selected */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: selectedLocation === location.id ? 'auto' : 0,
                        opacity: selectedLocation === location.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 border-t border-gray-200 space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="w-4 h-4 mr-2 text-green-500" />
                          <a href={`tel:${location.phone}`} className="hover:text-blue-600 transition-colors">
                            {location.phone}
                          </a>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="w-4 h-4 mr-2 text-blue-500" />
                          <a href={`mailto:${location.email}`} className="hover:text-blue-600 transition-colors">
                            {location.email}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200"
            >
              <p className="text-sm text-gray-600 text-center">
                💡 <strong>Tip:</strong> Click on map pins or location cards to view contact details
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};