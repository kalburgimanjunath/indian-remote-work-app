// import Link from '@next/Link';
export default function Navbar() {
  const navitems1 = [
    // { title: 'sign in/sign up', link: './signin' },
    { title: 'Remote Community', link: './remotecommunity' },
    { title: 'Remote Companies Hiring', link: './remotecompanies' },
    // { title: 'Post a Remote Job', link: './postjob' },
    // { title: 'Search remote jobs', link: './' },
    // { title: 'Contact Us', link: './contactus' },
    // { title: 'Privacy Policy', link: './privacypolicy' },
  ];
  const navitems2 = [
    { title: 'Sign in/Sign up', link: './signin' },
    // { title: 'Remote Community', link: './remotecommunity' },
    // { title: 'Remote Companies Hiring', link: './remotecompanies' },
    { title: 'Post a Remote Job', link: './postjob' },
    // { title: 'Search remote jobs', link: './' },
    // { title: 'Contact Us', link: './contactus' },
    // { title: 'Privacy Policy', link: './privacypolicy' },
  ];
  return (
    <div className="flex shadow-md sticky top-0 left-0 bg-red-50">
      <div>
        <div className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex">
          {navitems1 &&
            navitems1.map((item) => {
              return (
                <div className="bg-red-50 hover:bg-red-100 p-4">
                  <a href={item.link}>{item.title}</a>
                </div>
              );
            })}
        </div>
        <div className="flex">
          {navitems2 &&
            navitems2.map((item) => {
              return (
                <div className="bg-red-50 hover:bg-red-100 p-4">
                  <a href={item.link}>{item.title}</a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
