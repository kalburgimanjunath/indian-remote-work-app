import { CompanyList } from '../components';
export default function RemoteCompanies() {
  const items = [
    {
      name: '37signals',
      location: 'Chicago, IL',
      website: 'Company Website',
    },
    {
      name: '800.com',
      location: 'Chicago, IL',
      website: 'Company Website',
    },
  ];
  return (
    <div className="m-20">
      <h1 className="font-bold text-lg">Remote companies hiring</h1>
      <div>Company list</div>
      <div>
        <CompanyList items={items} />
      </div>
    </div>
  );
}
