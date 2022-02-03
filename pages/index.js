import "../styles.css";
import acme from "../assets/acme.png";
import logos from "../assets/logo-strip-desktop-v1.png";

const NavItem = (props) => (
  <li>
    <a
      className="text-sm font-semibold text-gray-700 px-2 py-1 hover:bg-gray-200 rounded transition-colors duration-300"
      href={props.href}
    >
      {props.text}
    </a>
  </li>
);

const Button = (props) => (
  <button
    type={props.type}
    className="bg-red-500 hover:bg-red-600 transition-colors duration-300 text-white text-sm p-2 rounded border border-red-700"
  >
    {props.children}
  </button>
);

export default () => (
  <div className="container mx-auto">
    <nav className="flex justify-between p-4">
      <div className="flex items-center">
        <div className="inline-block h-6 w-6 rounded-full bg-gray-400" />
        <span className="ml-2">Notion</span>
      </div>
      <div className="hidden md:block">
        <ul className="flex space-x-2">
          <NavItem href="/product" text="Product" />
          <NavItem href="/download" text="Download" />
          <NavItem href="/remote-work" text="Remote work" />
          <NavItem href="/customers" text="Customers" />
          <NavItem href="/pricing" text="Pricing" />
          <NavItem href="/jobs" text="Jobs" />
          <NavItem href="/login" text="Log In" />
          <NavItem href="/signup" text="Sign Up" />
        </ul>
      </div>
    </nav>
    <div className="text-center md:text-left md:flex max-w-3xl mx-auto mt-12 mb-12 md:mt-24 space-x-3">
      <h1 className="font-bold text-6xl leading-tight">All-in-one workspace</h1>
      <div className="space-y-3">
        <p className="text-xl font-normal">
          Write, plan, collaborate, and get organized. Notion is all you need -
          In one tool.
        </p>
        <div className="md:hidden">
          <Button type="button">Download from App Store</Button>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("TODO submit form");
          }}
          className="hidden md:block space-x-3"
        >
          <input
            type="text"
            placeholder="Enter your email..."
            className="bg-white rounded border border-gray-300 px-4 py-2"
          />
          <Button type="submit">Sign up</Button>
        </form>
        <p className="text-gray-500 text-sm">
          For teams & individuals - web, mobile, Mac, Windows.
        </p>
      </div>
    </div>

    <div className="bg-orange-100 flex justify-center px-32 pt-4 pb-8">
      <div className="max-w-screen-mg">
        <div className="flex justify-center pt-4 pb-8">
          <ul className="flex space-x-2">
            <NavItem href="/team-wiki" text="📘 Team wiki" />
            <NavItem href="/projects" text="🎒 Projects & tasks" />
            <NavItem href="/notes" text="✍️ Notes & docs" />
          </ul>
        </div>
        <img className="object-contain shadow" src={acme} alt="Acme Inc" />
      </div>
    </div>

    <div className="m-16">
      <img src={logos} alt="Logos" />
    </div>
  </div>
);
