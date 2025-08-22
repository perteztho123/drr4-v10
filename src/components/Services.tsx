import React from 'react';
import { Shield, Heart, Truck, Home, AlertTriangle, Users, Phone, Settings } from 'lucide-react';

const ICON_MAP = {
  Shield,
  Heart,
  Truck,
  Home,
  AlertTriangle,
  Users,
  Phone,
  Settings,
};

type Service = {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof ICON_MAP;
  tags: string[];
  status: 'active' | 'inactive';
};

type Props = {
  service: Service;
  onEdit: (service: Service) => void;
  onDelete: (id: string) => void;
};

const ServiceCard: React.FC<Props> = ({ service, onEdit, onDelete }) => {
  const Icon = ICON_MAP[service.icon] || Shield;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Icon className="text-blue-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{service.title}</h3>
            <span className={`px-2 py-1 text-xs rounded-full ${
              service.status === 'active'
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {service.status}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onEdit(service)}
            className="text-blue-600 hover:text-blue-800"
            aria-label="Edit service"
          >
            <svg width="16" height="16" className="inline align-middle" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a2.828 2.828 0 1 1 4 4l-8.5 8.5a2 2 0 0 1-1.414.586H2v-4.086a2 2 0 0 1 .586-1.414L12 2Z"/></svg>
          </button>
          <button
            onClick={() => onDelete(service.id)}
            className="text-red-600 hover:text-red-800"
            aria-label="Delete service"
          >
            <svg width="16" height="16" className="inline align-middle" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h10M7 6v6m2-6v6M5 6v6m6-6v6M4 4V2h8v2M2 6h12v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Z"/></svg>
          </button>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export Service;