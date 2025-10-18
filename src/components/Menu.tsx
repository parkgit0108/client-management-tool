import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "trainer", "client", "PTClient"],
      },
      {
        icon: "/trainer.svg",
        label: "Trainers",
        href: "/list/trainers",
        visible: ["admin", "trainer"],
      },
      {
        icon: "/clients.svg",
        label: "Members",
        href: "/list/members",
        visible: ["admin", "trainer"],
      },
      {
        icon: "/ptclient.svg",
        label: "Clients",
        href: "/list/clients",
        visible: ["admin", "trainer"],
      },
      {
        icon: "/workout.svg",
        label: "Workouts",
        href: "/list/workouts",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "trainer", "client"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "trainer", "client"],
      },
      {
        icon: "/exam.png",
        label: "Tests",
        href: "/list/tests",
        visible: ["admin", "trainer", "member", "client"],
      },
      {
        icon: "/personalWorkouts.svg",
        label: "Personal Workouts",
        href: "/list/personalWorkouts",
        visible: ["admin", "trainer", "client"],
      },
      {
        icon: "/result.svg",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "trainer", "client"],
      },
      {
        icon: "/attendance.svg",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "trainer", "client", "member"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "trainer", "client", "member"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "trainer", "client", "member"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "trainer", "client", "member"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "trainer", "client", "member"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "trainer", "client", "member"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "trainer", "client", "member"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center gap-4 justify-center lg:justify-start text-gray-500 py-2"
            >
              <Image src={item.icon} alt="" width={20} height={20} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
          <div />
        </div>
      ))}
    </div>
  );
};

export default Menu;
