import { CompanyList } from '../../components';
import { REMOTECOMPANIES } from './remotecompanies';
export default function index() {
  const items = REMOTECOMPANIES;
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
