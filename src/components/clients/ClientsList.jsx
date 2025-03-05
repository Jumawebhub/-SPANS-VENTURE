import { motion } from 'framer-motion';

const clients = [
  {
    id: 1,
    name: 'TechCorp',
    logo: 'https://placehold.co/200x100/dddddd/333333?text=TechCorp',
    industry: 'Technology'
  },
  {
    id: 2,
    name: 'GlobalFinance',
    logo: 'https://placehold.co/200x100/dddddd/333333?text=GlobalFinance',
    industry: 'Finance'
  },
  {
    id: 3,
    name: 'MediHealth',
    logo: 'https://placehold.co/200x100/dddddd/333333?text=MediHealth',
    industry: 'Healthcare'
  },
  {
    id: 4,
    name: 'EduLearn',
    logo: 'https://placehold.co/200x100/dddddd/333333?text=EduLearn',
    industry: 'Education'
  },
  {
    id: 5,
    name: 'RetailPlus',
    logo: 'https://placehold.co/200x100/dddddd/333333?text=RetailPlus',
    industry: 'Retail'
  },
  {
    id: 6,
    name: 'ManufactPro',
    logo: 'https://placehold.co/200x100/dddddd/333333?text=ManufactPro',
    industry: 'Manufacturing'
  },
  {
    id: 7,
    name: 'HospitalityOne',
    logo: 'https://placehold.co/200x100/dddddd/333333?text=HospitalityOne',
    industry: 'Hospitality'
  },
  {
    id: 8,
    name: 'LogisticsPro',
    logo: 'https://placehold.co/200x100/dddddd/333333?text=LogisticsPro',
    industry: 'Logistics'
  }
];

const ClientsList = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Clients</h2>
          <p className="section-subtitle">Trusted by Leading Organizations</p>
          <p className="max-w-3xl mx-auto text-gray-600">
            We're proud to work with a diverse range of clients across various industries. Here are some of the organizations that trust us with their technology needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client) => (
            <motion.div 
              key={client.id} 
              className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: client.id * 0.05 }}
              viewport={{ once: true }}
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="client-logo max-h-16"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Industries We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from(new Set(clients.map(client => client.industry))).map((industry, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-4 rounded-md shadow-sm text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {industry}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsList;