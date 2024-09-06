const BlogPage = () => {
  return (
    <div
      className="w-full max-w-7xl mx-auto px-2 mt-10
    "
    >
      <h1 className="mt-5 text-2xl font-bold text-green-700 text-center">
        Read Our Blogs
      </h1>

      <div className="mt-20">
        <div className="flex items-center">
          <div className="pe-5 border-e-2">
            <p>
              <span className="text-xl font-bold text-green-800">
                Author :{" "}
              </span>
              Admin
            </p>
          </div>
          <p className="ps-5 text-slate-700 font-semibold">
            TMSS Hospital Mangement System
          </p>
        </div>

        {/* text here */}

        <div className="text-slate-600 mt-5 border-t-2 border-neutral-300 pt-5">
          <p>
            TMSS hospital management system is a dynamic web application. Where
            the admin can control all over the website. Total ERP Model and
            doctor Comossion is calcuted.
          </p>
          <p className="text-md font-bold">User Management Admin Dashboard:</p>
          <ul>
            <li>Centralized control panel for admin tasks</li>
            <li>Role-Based Access</li>
            <li>
              Control: Different access levels for administrators, doctors,
              nurses, and other staff.
            </li>
            <li></li>
          </ul>
          {/*  */}
          <p className="text-md font-bold">Doctor Management:</p>
          <ul>
            <li>
              Doctor Profiles: Detailed profiles for doctors including their
              specialization, availability, and contact information.
            </li>
            <li>
              Commission Calculation: Automated calculation of doctor
              commissions based on appointments and treatments.
            </li>
          </ul>

          {/*  */}
          <p className="text-md font-bold"> Billing and Payments:</p>
          <ul>
            <li>
              Invoicing: Generation of invoices for treatments, consultations,
              and other services.
            </li>
            <li>
              Payment Processing: Integration with payment gateways for online
              payments.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
