export default function CompanyList({ items }) {
  return (
    <div className="flex">
      {items &&
        items.map((item) => {
          return (
            <div className="border-2 bg-white-100 shadow-md p-2 flex rounded-lg mr-2 hover:bg-gray-100 cursor-pointer">
              <div>
                <img
                  src="https://picsum.photos/id/237/200/300"
                  style={{ width: '100px', height: '100px' }}
                />
              </div>
              <div className="ml-3">
                <div>{item.name}</div>
                <div>{item.location}</div>
                <div>{item.website}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
