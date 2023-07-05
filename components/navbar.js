// import Link from '@next/Link';
export default function Navbar() {
  const navitems = [
    { title: 'sign in/sign up', link: './signin' },
    { title: 'Remote Community', link: './remotecommunity' },
    { title: 'Remote Companies Hiring', link: './remotecompanies' },
    { title: 'Post a Remote Job', link: './postjob' },
    { title: 'Search remote jobs', link: './searchjobs' },
    { title: 'Contact Us', link: './contactus' },
    { title: 'Privacy Policy', link: './provacypolicy' },
  ];
  return (
    <div className="navbar">
      {navitems &&
        navitems.map((item) => {
          return (
            <div className="item">
              <a href={item.link}>{item.title}</a>
            </div>
          );
        })}
    </div>
  );
}
