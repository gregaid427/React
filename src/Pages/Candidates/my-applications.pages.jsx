import Grey from "../../Assets/images/grey.jpeg";
import { Link } from "react-router-dom";

function MyApplicationsPage() {
  let applications = [
    {
      company: {
        name: "STEM Returners",
      },
      job: {
        company: "STEM Returners",
        category: "Software",
        size: "1-10",
        name: "Associate Software Engineer Java",
        duration: "1 year",
        location: "New York, America",
        salary: "$30,000",
        description:
          "We’re looking for an Associate Software Engineer who loves solving problems to join the API Engineering Team here at RS Components. We’re building out a suite of APIs to support our eCommerce Business.",
        companyOffer: [
          "We have an outstanding benefits package, which includes:",
          "Flexible working arrangements (this is a fully remote role, if you would prefer coming to our offices in Corby/ London, you are welcome)",
          "Up to 10% annual bonus",
          "Up to 25 days holiday (with the option to purchase a further week)",
          "Extremely generous contributory pension scheme",
          "Discounted stock options",
          "Private healthcare, life assurance and daily access to a GP",
        ],
        responsibilities: [
          "Contributing to the team who will be designing, building, testing, automating, documenting, and supporting integral infrastructure and application components within our API platform, which may at times require a multi-disciplined focus depending on the work required.",
          "Deploying software and services through emerging DevOps tools such as Terraform.",
          "Contributing to design and implementation planning sessions.",
          "Supporting and maintaining legacy applications as required",
        ],
        essentialSkills: [
          "Development in Java, or Node JS",
          "Popular AWS Services (Lambda, EC2, S3, Route 53, API Gateway, IAM etc).",
          "Infrastructure as code (IaC) using Terraform (with Terragrunt).",
          "Cloud services - HashiCorp (Vault, Consul, Nomad), Kong.",
        ],
        desirableSkills: [
          "Knowledge or Experience of AWS – S3, EC2, SNS, SQS and SQL databases (Aurora PostrgeSQL), NoSQL databases (Dynamo).",
          "Understanding/Experience of test plans. test cases, system testing, regression testing.",
          "Introspection and observability tooling (Datadog).",
          "Familiarity with AWS Identity and Access Management (IAM).",
          "JMeter, Cucumber, Selenium, Postman.",
        ],
        experiences: [
          "The ideal candidate will likely be qualified to degree level in Computer Science, Maths or related science discipline.",
          "Credit SME or SME for another complex asset className.",
          "At least 3 years of experience with Technology development in a Front Office capacity.",
          "Curiosity to learn the Credit business and products.",
        ],
        aboutCompany:
          "We began in a north-west London garage supplying spare parts to radio repair shops back in 1937. Today, we’re using digital technology to revolutionise the way we do business and strengthen our position as the one-stop-shop for industrial parts and electronic components.",
        hasApplied: true,
      },
    },
    {
      company: {
        name: "Goldman Sachs",
      },
      job: {
        company: "Goldman Sachs",
        category: "Finance",
        size: "100-1000",
        name: "AMD Private – Senior Software Engineer – London – Associate",
        duration: "2 year",
        location: "London, England",
        salary: "$92,000",
        description:
          "Goldman Sachs Asset Management is a global, broad and deep platform with diversified capabilities across public and private asset classes. We are a top 10 global asset manager with a leadership position across asset classes and key market segments. The Alternatives business use a diverse range of investment strategies, covering a wide range of asset classes across a wide range of geographies and sectors. GS Asset Management engineers collaborate with investing and finance professionals as a partnership to create quantitative computer models and web applications to support all aspects of investment and deal lifecycle needs. We create quantitative models and developing software applications to help structure, value, hedge, risk manage the investments in our portfolios. The team proactively collaborates with colleagues globally to ensure the most appropriate and scalable solutions are implemented to everyone’s benefit.",
        companyOffer: [
          "A diverse, inclusive and flexible environment.",
          "A collaborative team of engineers eager to help each other achieve common goals.",
          "Close partnership with the Credit business.",
          "Fast paced, dynamic environment with significant opportunities for career growth.",
          "Cutting edge reactive programming paradigm that allows us to write asynchronous applications with greatly improved parallelism and concurrency.",
          "Close collaboration with colleagues in the business and UX to deliver usable functionality directly to traders through modern front end applications using HTML5 and JavaScript.",
          "Fully automated, mature, true continuous deployment - where developers can push code in seconds from within the development environment.",
        ],
        responsibilities: [],
        essentialSkills: [
          "Meaningful experience in, but not limited to, any one of the following programming languages: Java, C++, Python, Javascript/Typescript, React/Redux, Angular",
          "Should include experience of working with some relational or non-relational database(s)",
          "Strong knowledge of data structures and algorithms",
          "Excellent object oriented, data modelling or functional analysis and design skills",
        ],
        desirableSkills: [
          "Comfortable multi-tasking, managing multiple stakeholders, and working as part of a global team",
          "Proven strong communication and interpersonal ability",
          "Experience building client- and consumer-facing products is a plus, but not essential",
          "Knowledge of existing strategic firmwide platforms is a plus, but not essential",
          "Experience building interactive web applications and an interest in adopting new cloud technologies [eg. AWS]",
        ],
        experiences: [
          "The ideal candidate will likely be qualified to degree level in Computer Science, Maths or related science discipline.",
          "Credit SME or SME for another complex asset className.",
          "At least 3 years of experience with Technology development in a Front Office capacity.",
          "Curiosity to learn the Credit business and products.",
        ],
        aboutCompany:
          "At Goldman Sachs, we commit our people, capital and ideas to help our clients, shareholders and the communities we serve to grow. Founded in 1869, we are a leading global investment banking, securities and investment management firm. Headquartered in New York, we maintain offices around the world. We believe who you are makes you better at what you do. We're committed to fostering and advancing diversity and inclusion in our own workplace and beyond by ensuring every individual within our firm has a number of opportunities to grow professionally and personally, from our training and development opportunities and firmwide networks to benefits, wellness and personal finance offerings and mindfulness programs. Learn more about our culture, benefits, and people at GS.com/careers. We’re committed to finding reasonable accommodations for candidates with special needs or disabilities during our recruiting process. Learn more: https://www.goldmansachs.com/careers/footer/disability-statement.html",
        hasApplied: true,
      },
    },
  ];
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="alert alert-info mt-4" role="alert">
            Manage all your job applications from here.
          </div>
          <div className="card p-0 ">
            <div className="card-body rounded-4 p-0">
              <table className="table-striped m-0 table">
                <thead className="table-dark">
                  <tr>
                    <th className="py-4 text-left" scope="col">
                      Image
                    </th>
                    <th className="py-4 text-left" scope="col">
                      Company
                    </th>
                    <th className="py-4 text-left" scope="col">
                      Job
                    </th>
                    <th className="py-4 text-left" scope="col">
                      Status
                    </th>
                    <th className="py-4 text-left" scope="col">
                      Date Applied
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((application) => (
                    <tr>
                      <th className="justify-items-center py-4" scope="row">
                        <img
                          style={{ height: "45px", width: "45px" }}
                          src={Grey}
                          className="img-fluid rounded-1"
                          alt="..."
                        />
                      </th>
                      <td className="py-4 ">
                        <Link
                          className="text-decoration-none"
                          to={"/company-details"}
                          state={application.company}
                        >
                          <h6 className={"application-text"}>
                            King
                            <br />
                            <small className={"text-muted"}>
                              Leader in tech industry
                            </small>
                          </h6>
                        </Link>
                      </td>
                      <td className="py-4 ">
                        <Link
                          className={"text-decoration-none"}
                          to={"/job-details"}
                          state={application.job}
                        >
                          <h6 className={"application-text"}>
                            Associate Software Engineer Java
                            <br />
                            <small className={"text-muted"}>
                              Leader in tech industry
                            </small>
                          </h6>
                        </Link>
                      </td>
                      <td className="py-4 ">
                        <h6 className={"application-text"}>
                          Under Review
                          <br />
                          {/*<small className={"text-muted"}> sdx</small>*/}
                        </h6>
                      </td>
                      <td className="py-4 ">
                        <h6 className={"application-text"}>
                          October 28, 2015
                          <br />
                          {/*<small className={"text-muted"}> sd</small>*/}
                        </h6>
                      </td>
                      <td className="py-4">
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                        >
                          Withdraw
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApplicationsPage;
