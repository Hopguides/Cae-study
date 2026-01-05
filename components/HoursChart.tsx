import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { WORK_HOURS_DATA } from '../constants';

const COLORS = ['#FF3200', '#000000', '#9CA3AF']; // Primary, Black, Gray

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-5 border border-gray-100 shadow-xl rounded-xl max-w-xs">
        <p className="font-heading font-bold text-lg mb-1">{label}</p>
        <p className="text-hop-primary font-bold text-2xl mb-2">{data.hours} ur</p>
        <p className="text-sm text-gray-600 border-t pt-2 border-gray-100 font-sans">{data.tasks}</p>
        <div className="mt-2 text-xs text-gray-400 text-right font-mono">[{data.citation}]</div>
      </div>
    );
  }
  return null;
};

const HoursChart: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 bg-gray-50 rounded-3xl my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Table View */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-hop-black mb-6">
            Analiza <span className="text-hop-primary">Delovnih Ur</span>
          </h2>
          <p className="text-gray-600 mb-8 font-sans text-lg">
            Na podlagi analize e-poštnih sporočil in projektne dokumentacije smo identificirali naslednjo delitev dela med ključnimi ekipami.
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-hop-black text-white">
                <tr>
                  <th className="p-4 font-heading font-semibold tracking-wide">Vloga</th>
                  <th className="p-4 font-heading font-semibold text-right">Ure</th>
                  <th className="p-4 font-heading font-semibold hidden sm:table-cell">Naloge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {WORK_HOURS_DATA.map((row) => (
                  <tr key={row.role} className="hover:bg-hop-pastel transition-colors">
                    <td className="p-4 font-bold text-hop-black">{row.role}</td>
                    <td className="p-4 text-right font-bold text-hop-primary">{row.hours}</td>
                    <td className="p-4 text-sm text-gray-600 hidden sm:table-cell">
                      {row.tasks} 
                      <sup className="text-gray-400 ml-1">[{row.citation}]</sup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chart View */}
        <div className="h-[400px] w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-center font-heading text-gray-400 mb-6 uppercase tracking-widest text-sm font-bold">Distribucija Dela</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={WORK_HOURS_DATA}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
              <XAxis type="number" stroke="#9CA3AF" />
              <YAxis dataKey="role" type="category" width={100} stroke="#4B5563" fontWeight={700} fontFamily="Inter" />
              <Tooltip content={<CustomTooltip />} cursor={{fill: '#FFF5F2'}} />
              <Bar dataKey="hours" radius={[0, 8, 8, 0]}>
                {WORK_HOURS_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </section>
  );
};

export default HoursChart;