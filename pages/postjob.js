export default function PostJob() {
  return (
    <div className="m-20">
      <div className="font-bold text-lg">
        Publish a remote job offer for FREE
      </div>
      <div>
        Sharing a remote job in our community means reaching more than 2k
        registered users and still growing. Sharing a job offer will help others
        to find their dream remote job.
      </div>
      <div>
        <h3 className="font-bold">JOB DETAILS</h3>
        <div>
          <div>job title</div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>application link</div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>job category</div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>job skills(split each skill with ";")</div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>job description</div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>is this role open to work from anywhere in the world?</div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>regions that allow to work remotely</div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>region list</div>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold">COMPANY DETAILS</div>
        <div>Let us know a bit more about the hiring company</div>
        <div>
          <div>company name</div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>company website</div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>company logo url</div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>contact email</div>
          <div>
            <input type="text" />
          </div>
        </div>

        <button type="button" className="primary">
          Publish Remote Job
        </button>
      </div>
    </div>
  );
}
