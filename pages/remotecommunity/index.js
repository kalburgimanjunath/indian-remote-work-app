import { JoinUs } from '../../components/';
import { useState } from 'react';
export default function index() {
  const [vote, setVote] = useState(0);
  const PUBLICATIONS = [
    {
      id: 1,
      title:
        'I am video editing and translation languages and video posting and any other etc',
      user: {
        name: 'M.Luqman Hashmi',
        bio: 'writing and video editing',
        created_at: '20-06-2023',
      },
      vote: 1,
      comments: 10,
    },
    {
      id: 1,
      title:
        'I am video editing and translation languages and video posting and any other etc',
      user: {
        name: 'M.Luqman Hashmi',
        bio: 'writing and video editing',
        created_at: '20-06-2023',
      },
      vote: 1,
      comments: 10,
    },
  ];
  return (
    <div>
      <JoinUs />
      <div className="m-20">
        <h1>RECENT PUBLICATIONS</h1>
        {PUBLICATIONS &&
          PUBLICATIONS.map((item) => {
            return (
              <div className="bg-white-100 p-4 cursor-pointer rounded-lg border-color-gray-100 border-2 mt-4">
                <div className="flex text-xs text-slate-400">
                  <span className="rounded-5 border-2 p-1">Publication</span>
                  <span className="p-2">Updated 6 days ago</span>
                </div>
                <div className="flex">
                  <div className="m-2">
                    <img
                      src=""
                      className="border-2 rounded-md"
                      style={{ width: '70px', height: '70px' }}
                    />
                  </div>
                  <div className="m-2">
                    <div className="font-bold">{item.user.name}</div>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 text-xs text-slate-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>

                      <span className="text-xs text-slate-400">
                        {item.user.bio}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="m-2">{item.title}</div>
                <div className="border-t-2 flex justify-arround w-full">
                  <div className="primary mr-2 flex justify-arround">
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
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                      />
                    </svg>
                    <span className="ml-2">Upvote({item.vote})</span>
                  </div>
                  <div className="primary flex justify-arround">
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
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    <span className="ml-2">
                      Write a Comment({item.comments})
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
