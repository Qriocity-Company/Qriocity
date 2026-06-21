import React, { useEffect, useState } from 'react';
import { LayoutDashboard, Download, RefreshCcw } from 'lucide-react';

const Dashboard = () => {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchLeads = async () => {
        setLoading(true);
        setError(null);
        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
            const response = await fetch(`${apiUrl}/api/leads`);
            if (!response.ok) {
                throw new Error('Failed to fetch leads');
            }
            const data = await response.json();
            setLeads(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-purple-100 rounded-xl">
                            <LayoutDashboard className="text-purple-600" size={24} />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900">Leads Dashboard</h1>
                    </div>
                    <button
                        onClick={fetchLeads}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
                    >
                        <RefreshCcw size={16} className={loading ? "animate-spin" : ""} />
                        Refresh
                    </button>
                    {/* Future: Add CSV Export */}
                </div>

                {error && (
                    <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                        <p className="text-red-700">{error}</p>
                        <p className="text-sm text-red-500 mt-1">Make sure the backend is running and Google Sheets is configured.</p>
                    </div>
                )}

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-gray-600">
                            <thead className="bg-gray-50 text-xs uppercase font-semibold text-gray-500">
                                <tr>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Email</th>
                                    <th className="px-6 py-4">Mobile</th>
                                    <th className="px-6 py-4">Education</th>
                                    <th className="px-6 py-4">Profile</th>
                                    <th className="px-6 py-4">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {loading ? (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                                            Loading leads...
                                        </td>
                                    </tr>
                                ) : leads.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                                            No leads found.
                                        </td>
                                    </tr>
                                ) : (
                                    leads.map((lead, index) => (
                                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-gray-900">{typeof lead === 'object' ? lead.Name || lead.name : lead[0]}</td>
                                            <td className="px-6 py-4">{typeof lead === 'object' ? lead.Email || lead.email : lead[1]}</td>
                                            <td className="px-6 py-4">{typeof lead === 'object' ? lead.Mobile || lead.mobile : lead[2]}</td>
                                            <td className="px-6 py-4">{typeof lead === 'object' ? lead.Education || lead.education : lead[3]}</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                    {typeof lead === 'object' ? lead.Profile || lead.profile : lead[4]}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-400">
                                                {typeof lead === 'object' ? new Date(lead.Date || lead.date).toLocaleDateString() : new Date(lead[5] || Date.now()).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
