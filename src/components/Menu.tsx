const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "trainer", "client", "caregiver"],
      },
      {
        icon: "/trainer.png",
        label: "Trainers",
        href: "/list/trainers",
        visible: ["admin", "trainer"],
      },
      {
        icon: "/client.png",
        label: "Clients",
        href: "/list/clients",
        visible: ["admin", "trainer"],
      },
      {
        icon: "/caregiver.png",
        label: "Caregivers",
        href: "/list/caregivers",
        visible: ["admin", "trainer"],
      },
      {
        icon: "/workout.png",
        label: "Workouts",
        href: "/list/workouts",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "trainer"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "trainer"],
      },
      {
        icon: "/test.png",
        label: "Tests",
        href: "/list/tests",
        visible: ["admin", "trainer", "client", "caregiver"],
      },
      {
        icon: "/personalWorkouts.png",
        label: "Personal Workouts",
        href: "/list/personalWorkouts",
        visible: ["admin", "trainer", "client", "caregiver"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "trainer", "client", "caregiver"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "trainer", "client", "caregiver"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "trainer", "client", "caregiver"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "trainer", "client", "caregiver"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "trainer", "client", "caregiver"],
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
        visible: ["admin", "trainer", "client", "caregiver"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "trainer", "client", "caregiver"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "trainer", "client", "caregiver"],
      },
    ],
  },
];