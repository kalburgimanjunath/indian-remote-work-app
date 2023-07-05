// import Link from '@next/Link';
export default function Navbar() {
  const navitems = [
    { title: 'sign in/sign up', link: './signin' },
    { title: 'Remote Community', link: './remotecommunity' },
    { title: 'Remote Companies Hiring', link: './remotecompanies' },
    { title: 'Post a Remote Job', link: './postjob' },
    { title: 'Search remote jobs', link: './' },
    { title: 'Contact Us', link: './contactus' },
    { title: 'Privacy Policy', link: './privacypolicy' },
  ];
  return (
    <div className="flex shadow-lg sticky top-0 left-0">
      {navitems &&
        navitems.map((item) => {
          return (
            <div className="bg-red-50 hover:bg-red-100 p-2">
              <a href={item.link}>{item.title}</a>
            </div>
          );
        })}
    </div>
  );
}
