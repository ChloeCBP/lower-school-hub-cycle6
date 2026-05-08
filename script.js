function setActiveNav() {
  const page = document.body.dataset.page;
  const links = document.querySelectorAll(".main-nav a");

  links.forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add("active");
    }
  });
}

const literacySchedule = [
  {
    date: "2026-05-18",
    session: 1,
    week: 1,
    title: "Telling Your Story",
    connect: "This or That — celebrate how you've changed this year as a reader, writer, and thinker",
    explore: "Introduce the portfolio site and the cycle prompt: creatively tell the story of how you have changed this year",
    tryIt: "Review the async daily practice and begin reflecting on your year at Prisma",
    breakout: "No breakout rooms today"
  },
  {
    date: "2026-05-19",
    session: 2,
    week: 1,
    title: "Building Your Story: Cycle 1",
    connect: "One Word for Cycle One — choose a single word to capture your Cycle 1 experience",
    explore: "Navigate Google Sites and update the Cycle 1 page of your portfolio site",
    tryIt: "Continue updating your portfolio site using the steps from today's session",
    breakout: "Breakout rooms by working group"
  },
  {
    date: "2026-05-20",
    session: 3,
    week: 1,
    title: "Continuing to Build Your Story",
    connect: "Portfolio Page Audit — identify exactly what is missing from your cycle pages",
    explore: "Continue updating your portfolio site to tell the story of Cycles 2 and 3",
    tryIt: "Keep working on your portfolio site pages using the Must Complete list in your Literacy Journal",
    breakout: "Breakout rooms by working group"
  },
  {
    date: "2026-05-21",
    session: 4,
    week: 1,
    title: "Own It: The Initiative & Follow Through Challenge",
    connect: "Review what Initiative and Follow Through looks and feels like",
    explore: "The Lost Story Escape Room — practice Initiative and Follow Through while solving challenges",
    tryIt: "Reflect on how you have grown in Initiative and Follow Through this year",
    breakout: "No breakout rooms today"
  },
  {
    date: "2026-05-26",
    session: 5,
    week: 2,
    title: "Our Voices in Action",
    connect: "Review Communication and Collaboration — what it looks and feels like",
    explore: "Tangram Challenge — practice Communication and Collaboration with your team",
    tryIt: "Reflect on how you have grown in Communication and Collaboration this year",
    breakout: "Breakout rooms"
  },
  {
    date: "2026-05-27",
    session: 6,
    week: 2,
    title: "Curious Minds at Work",
    connect: "Review Applied Curiosity — what it looks and feels like",
    explore: "The Curiosity Files: Animal Edition — practice Applied Curiosity while playing the game",
    tryIt: "Reflect on how you have grown in Applied Curiosity this year",
    breakout: "Breakout rooms"
  },
  {
    date: "2026-05-28",
    session: 7,
    week: 2,
    title: "Think. Build. Revise.",
    connect: "Review Innovator's Mindset — what it looks and feels like",
    explore: "The Blueprint Challenge — use the design process to build a paper tower",
    tryIt: "Reflect on how you have grown in Innovator's Mindset this year",
    breakout: "No breakout rooms today"
  },
  {
    date: "2026-06-01",
    session: 8,
    week: 3,
    title: "The Finishing Touch",
    connect: "Portfolio Page Audit — review your site and identify what still needs updating",
    explore: "Working time to finish updating your portfolio site",
    tryIt: "Make any final additions to your portfolio site before Expo Day",
    breakout: "Breakout rooms by working group"
  },
  {
    date: "2026-06-02",
    session: 9,
    week: 3,
    title: "Sharing Your Story",
    connect: "Feelings Check — check in before sharing your portfolio with the full pod",
    explore: "Share your portfolio site and celebrate the story of how you have changed this year",
    tryIt: "Recognize an amazing portfolio site storyteller from your breakout room",
    breakout: "Full pod sharing (combined cohorts)"
  },
  {
    date: "2026-06-04",
    session: 10,
    week: 3,
    title: "That's a Wrap!",
    connect: "Prisma Powers Kahoot — celebrate everything you have learned this year",
    explore: "I Used to… Now I… — reflect on the amazing ways you have changed this year",
    tryIt: "Share one thing you are most proud of from your year at Prisma",
    breakout: "Celebration groups"
  }
];

const themeSchedule = [
  {
    date: "2026-05-18",
    session: 1,
    week: 1,
    title: "Intro to Health & Wellbeing",
    explore: "Welcome to Changemakers! — solve the kindness riddle and explore health & wellbeing components",
    explain: "How health and wellbeing connects to community service and what your project options are this cycle",
    tryIt: "Begin brainstorming your service project idea using the Changemaker Gallery and ideas document",
    breakout: "No breakout rooms today"
  },
  {
    date: "2026-05-19",
    session: 2,
    week: 1,
    title: "Planning Service",
    explore: "Review components of health and wellbeing and discuss what makes a strong service plan",
    explain: "Evaluate four real service plans using criteria — which plan is actually the best and why?",
    tryIt: "Continue working on your service project plan in your Project Journal",
    breakout: "Breakout rooms to evaluate service plans"
  },
  {
    date: "2026-05-20",
    session: 3,
    week: 1,
    title: "Fundraising Goal",
    explore: "Introduce philanthropy and the cohort's fundraising service project for this cycle",
    explain: "Debate, discuss, and decide on a realistic fundraising goal for your cohort",
    tryIt: "Work on your individual service project plan in your Project Journal",
    breakout: "No breakout rooms today"
  },
  {
    date: "2026-05-21",
    session: 4,
    week: 1,
    title: "Fundraising Strategies",
    explore: "Brainstorm and discuss different strategies for fundraising as a cohort",
    explain: "Decide which fundraising strategies your cohort will try and sign up for your role",
    tryIt: "Continue your individual service project in your Project Journal",
    breakout: "No breakout rooms today"
  },
  {
    date: "2026-05-26",
    session: 5,
    week: 2,
    title: "Evaluating Recipients: Environment",
    explore: "Evaluate organizations that help the environment — review, compare, and discuss",
    explain: "Debate and decide how to distribute cohort funds across environmental organizations",
    tryIt: "Complete your service project and reflect on the impact it had in your Project Journal",
    breakout: "Breakout rooms to evaluate organizations"
  },
  {
    date: "2026-05-27",
    session: 6,
    week: 2,
    title: "Evaluating Recipients: Animals",
    explore: "Evaluate organizations that help animals — review, compare, and discuss",
    explain: "Debate and decide how to distribute cohort funds across animal organizations",
    tryIt: "Continue your service project work and update your reflection in your Project Journal",
    breakout: "Breakout rooms to evaluate organizations"
  },
  {
    date: "2026-05-28",
    session: 7,
    week: 2,
    title: "Evaluating Recipients: People",
    explore: "Evaluate organizations that help people — review, compare, and discuss",
    explain: "Debate and decide how to distribute cohort funds across people-focused organizations",
    tryIt: "Finish your service project by May 29th and reflect on your impact",
    breakout: "Breakout rooms to evaluate organizations"
  },
  {
    date: "2026-06-01",
    session: 8,
    week: 3,
    title: "Our Final Decision",
    explore: "Revisit all previous evaluations across environment, animals, and people",
    explain: "Make a final cohort decision on how to distribute fundraising funds",
    tryIt: "Complete your end-of-year Prisma Power Survey and wrap up any loose ends",
    breakout: "No breakout rooms today"
  },
  {
    date: "2026-06-02",
    session: 9,
    week: 3,
    title: "Wrapping Up",
    explore: "Reflect on all the service completed this cycle — individual and cohort",
    explain: "Review the impact of your work and prepare to share it on Expo Day",
    tryIt: "Finalize your project reflection and prepare your Expo Day sharing plan",
    breakout: "Reflection groups"
  },
  {
    date: "2026-06-03",
    session: 10,
    week: 3,
    title: "Expo Day Prep",
    explore: "Get your project and portfolio site ready for an audience",
    explain: "What strong rehearsal and setup look like for Expo Day",
    tryIt: "Rehearse, organize your materials, and make final Expo Day decisions",
    breakout: "Expo prep groups"
  },
  {
    date: "2026-06-04",
    session: 11,
    week: 3,
    title: "Expo Day",
    explore: "Share your service project and portfolio site with visitors and family",
    explain: "Why sharing your work completes the service and learning process",
    tryIt: "Present your Changemaker project and celebrate the work of the whole cohort",
    breakout: "Expo sharing groups"
  }
];

const cycleStart = "2026-05-18";
const cycleEnd = "2026-06-04";

const dailyPracticeItems = [
  "Project journal practice",
  "Literacy journal practice",
  "Daily math practice",
  "Work on your service project"
];

function getTodayIso() {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
}

function clampDate(iso, start = cycleStart, end = cycleEnd) {
  if (iso < start) return start;
  if (iso > end) return end;
  return iso;
}

function addDays(iso, days) {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + days);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
}

function getWeekMonday(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  const day = dt.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  dt.setDate(dt.getDate() + diff);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
}

function formatLongDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
}

function formatShortDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
}

function formatWeekRange(startIso) {
  const endIso = addDays(startIso, 4);
  const [sy, sm, sd] = startIso.split("-").map(Number);
  const [ey, em, ed] = endIso.split("-").map(Number);

  const start = new Date(sy, sm - 1, sd);
  const end = new Date(ey, em - 1, ed);

  const startLabel = start.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const endLabel = end.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  return `${startLabel}–${endLabel}`;
}

function byDate(arr, iso) {
  return arr.find(x => x.date === iso);
}

function renderDailyPractice() {
  const list = document.getElementById("dailyPracticeList");
  if (!list) return;

  list.innerHTML = dailyPracticeItems
    .map(item => `<li>${item}</li>`)
    .join("");
}

function renderTodayPage() {
  const title = document.getElementById("todayPageTitle");
  if (!title) return;

  const notice = document.getElementById("todayNotice");
  const todayBadge = document.getElementById("todayBadge");
  const litLiveSession = document.getElementById("litLiveSession");
  const themeLiveSession = document.getElementById("themeLiveSession");
  const litOverviewContent = document.getElementById("litOverviewContent");
  const themeOverviewContent = document.getElementById("themeOverviewContent");

  const actualToday = getTodayIso();
  const displayToday = clampDate(actualToday);

  const lit = byDate(literacySchedule, displayToday);
  const theme = byDate(themeSchedule, displayToday);
  const weekNum = lit?.week || theme?.week || 1;

  title.textContent = `Today — ${formatLongDate(displayToday)}`;

  if (lit) {
    todayBadge.textContent = `Week ${lit.week} · Session ${lit.session}`;
  } else if (theme) {
    todayBadge.textContent = `Week ${theme.week} · Session ${theme.session}`;
  } else {
    todayBadge.textContent = `Week ${weekNum}`;
  }

  if (actualToday < cycleStart) {
    notice.innerHTML = `
      <div class="notice">
        <h3 class="section-title">Heads up!</h3>
        <p>This hub is showing the first day of the cycle right now because today is before the cycle begins.</p>
      </div>
    `;
  } else if (actualToday > cycleEnd) {
    notice.innerHTML = `
      <div class="notice">
        <h3 class="section-title">Heads up!</h3>
        <p>This hub is showing the last day of the cycle right now because today is after the live cycle.</p>
      </div>
    `;
  } else {
    notice.innerHTML = "";
  }

  litLiveSession.textContent = lit ? lit.breakout : "No live session today";
  themeLiveSession.textContent = theme ? theme.breakout : "No live session today";

  if (lit) {
    litOverviewContent.innerHTML = `
      <p><strong>Session ${lit.session} · ${lit.title}</strong></p>
      <ul class="pretty-list" style="margin-top:.6rem;">
        <li><strong>Connect:</strong> ${lit.connect}</li>
        <li><strong>Explore:</strong> ${lit.explore}</li>
        <li><strong>Try It Out:</strong> ${lit.tryIt}</li>
      </ul>
    `;
  } else {
    litOverviewContent.innerHTML = `<p>No Literacy Lab live session today.</p>`;
  }

  if (theme) {
    themeOverviewContent.innerHTML = `
      <p><strong>Session ${theme.session} · ${theme.title}</strong></p>
      <ul class="pretty-list" style="margin-top:.6rem;">
        <li><strong>Explore:</strong> ${theme.explore}</li>
        <li><strong>Explain:</strong> ${theme.explain}</li>
        <li><strong>Try It Out:</strong> ${theme.tryIt}</li>
      </ul>
    `;
  } else {
    themeOverviewContent.innerHTML = `<p>No Theme Workshop live session today.</p>`;
  }
}

function renderThisWeek() {
  const heading = document.getElementById("thisWeekHeading");
  const body = document.getElementById("thisWeekBody");

  if (!heading || !body) return;

  const actualToday = getTodayIso();
  const displayToday = clampDate(actualToday);
  const weekStart = getWeekMonday(displayToday);

  heading.textContent = `This Week — ${formatWeekRange(weekStart)}`;

  let rows = "";

  for (let i = 0; i < 5; i++) {
    const d = addDays(weekStart, i);

    if (d < cycleStart || d > cycleEnd) continue;

    const lit = byDate(literacySchedule, d);
    const theme = byDate(themeSchedule, d);
    const rowClass = d === displayToday ? ' class="highlight"' : "";

    rows += `
      <tr${rowClass}>
        <td>${formatShortDate(d)}</td>
        <td>${lit ? lit.title : "No live session"}</td>
        <td>${theme ? theme.title : "No live session"}</td>
      </tr>
    `;
  }

  body.innerHTML = rows;
}

function highlightCurrentDate() {
  const today = getTodayIso();
  const displayDate = clampDate(today);

  document.querySelectorAll("[data-date]").forEach((el) => {
    if (el.dataset.date === displayDate) {
      el.classList.add("is-today");
    } else {
      el.classList.remove("is-today");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();

  if (typeof renderDailyPractice === "function") renderDailyPractice();
  if (typeof renderTodayPage === "function") renderTodayPage();
  if (typeof renderThisWeek === "function") renderThisWeek();

  highlightCurrentDate();
});
