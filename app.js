const STORAGE_KEY = "runner-strength-log.v1";
const DEFAULT_TIMER_SECONDS = 90;
const CLOUD_FILE_NAME = "runner-strength-log.json";
const CLOUD_SYNC_DEBOUNCE_MS = 1600;

const WORKOUTS = [
  {
    id: "w1-mon",
    week: 1,
    day: "Monday",
    title: "Lower Emphasis + Push/Pull",
    versions: {
      gym: [
        { id: "trap-bar-deadlift", name: "Trap Bar Deadlift", sets: 3, target: "5 reps", metric: "reps", restSec: 150 },
        { id: "db-bench-press", name: "DB Bench Press", sets: 3, target: "8 reps", metric: "reps", restSec: 120 },
        {
          id: "split-squat",
          name: "Split Squat (rear foot elevated optional)",
          sets: 2,
          target: "8 / leg",
          metric: "reps",
          restSec: 90,
        },
        { id: "seated-cable-row", name: "Seated Cable Row", sets: 3, target: "8-10 reps", metric: "reps", restSec: 90 },
        { id: "standing-calf-raise", name: "Standing Calf Raise", sets: 3, target: "12-15 reps", metric: "reps", restSec: 60 },
        { id: "plank", name: "Plank", sets: 2, target: "45 sec", metric: "seconds", restSec: 60 },
      ],
      home: [
        { id: "db-rdl", name: "DB Romanian Deadlift", sets: 3, target: "8 reps", metric: "reps", restSec: 120 },
        { id: "push-ups", name: "Push-ups", sets: 3, target: "8-12 reps", metric: "reps", restSec: 90 },
        { id: "bulgarian-split-squat", name: "Bulgarian Split Squat", sets: 2, target: "8 / leg", metric: "reps", restSec: 90 },
        { id: "one-arm-db-row", name: "One-arm DB Row", sets: 3, target: "10 / side", metric: "reps", restSec: 90 },
        { id: "single-leg-calf-raise", name: "Single-leg Calf Raise", sets: 3, target: "12 / leg", metric: "reps", restSec: 60 },
        { id: "dead-bug", name: "Dead Bug", sets: 2, target: "10 / side", metric: "reps", restSec: 45 },
      ],
    },
  },
  {
    id: "w1-fri",
    week: 1,
    day: "Friday",
    title: "Lighter Lower + Stability + Upper",
    versions: {
      gym: [
        { id: "goblet-squat", name: "Goblet Squat", sets: 3, target: "6-8 reps", metric: "reps", restSec: 120 },
        {
          id: "lat-pulldown-assisted-pullup",
          name: "Lat Pulldown or Assisted Pull-ups",
          sets: 3,
          target: "8-10 reps",
          metric: "reps",
          restSec: 90,
        },
        { id: "db-overhead-press", name: "DB Overhead Press", sets: 2, target: "8 reps", metric: "reps", restSec: 90 },
        {
          id: "hamstring-curl",
          name: "Hamstring Curl (machine)",
          sets: 2,
          target: "10 reps",
          metric: "reps",
          restSec: 75,
        },
        { id: "pallof-press", name: "Pallof Press", sets: 2, target: "10 / side", metric: "reps", restSec: 60 },
        { id: "side-plank", name: "Side Plank", sets: 2, target: "30-45 sec / side", metric: "seconds", restSec: 60 },
      ],
      home: [
        { id: "db-goblet-squat", name: "DB Goblet Squat", sets: 3, target: "8 reps", metric: "reps", restSec: 120 },
        {
          id: "band-pulldown-inverted-row",
          name: "Band Pulldown or Inverted Row",
          sets: 3,
          target: "8-10 reps",
          metric: "reps",
          restSec: 90,
        },
        { id: "db-shoulder-press", name: "DB Shoulder Press", sets: 2, target: "8 reps", metric: "reps", restSec: 90 },
        { id: "single-leg-rdl", name: "Single-leg RDL", sets: 2, target: "8 / leg", metric: "reps", restSec: 75 },
        {
          id: "band-pallof-press",
          name: "Pallof Press (band)",
          sets: 2,
          target: "10 / side",
          metric: "reps",
          restSec: 60,
        },
        { id: "side-plank-home", name: "Side Plank", sets: 2, target: "30-45 sec", metric: "seconds", restSec: 60 },
      ],
    },
  },
  {
    id: "w2-mon",
    week: 2,
    day: "Monday",
    title: "Posterior Chain Focus",
    versions: {
      gym: [
        { id: "trap-bar-deadlift", name: "Trap Bar Deadlift", sets: 4, target: "4 reps", metric: "reps", restSec: 150 },
        { id: "db-bench-press", name: "DB Bench Press", sets: 3, target: "8 reps", metric: "reps", restSec: 120 },
        { id: "walking-lunges", name: "Walking Lunges", sets: 2, target: "10 / leg", metric: "reps", restSec: 90 },
        { id: "cable-row", name: "Cable Row", sets: 3, target: "8 reps", metric: "reps", restSec: 90 },
        { id: "seated-calf-raise", name: "Seated Calf Raise", sets: 3, target: "12 reps", metric: "reps", restSec: 60 },
        {
          id: "hanging-knee-raise-ab-wheel",
          name: "Hanging Knee Raise or Ab Wheel",
          sets: 2,
          target: "8-10 reps",
          metric: "reps",
          restSec: 60,
        },
      ],
      home: [
        { id: "db-rdl", name: "DB RDL (heavier)", sets: 4, target: "6 reps", metric: "reps", restSec: 120 },
        {
          id: "push-ups-elevated",
          name: "Push-ups (feet elevated optional)",
          sets: 3,
          target: "10 reps",
          metric: "reps",
          restSec: 90,
        },
        { id: "reverse-lunges", name: "Reverse Lunges", sets: 2, target: "10 / leg", metric: "reps", restSec: 90 },
        { id: "one-arm-row-heavier", name: "One-arm Row (heavier)", sets: 3, target: "8 reps", metric: "reps", restSec: 90 },
        {
          id: "single-leg-calf-raise-slow",
          name: "Single-leg Calf Raise (slow eccentric)",
          sets: 3,
          target: "10 reps",
          metric: "reps",
          restSec: 60,
        },
        { id: "hollow-hold", name: "Hollow Hold", sets: 2, target: "30-40 sec", metric: "seconds", restSec: 60 },
      ],
    },
  },
  {
    id: "w2-fri",
    week: 2,
    day: "Friday",
    title: "Single-Leg Strength + Stability",
    versions: {
      gym: [
        {
          id: "front-foot-elevated-split-squat",
          name: "Front Foot Elevated Split Squat",
          sets: 3,
          target: "6 / leg",
          metric: "reps",
          restSec: 120,
        },
        {
          id: "pullups-or-pulldown",
          name: "Pull-ups or Pulldown",
          sets: 3,
          target: "6-8 reps",
          metric: "reps",
          restSec: 90,
        },
        { id: "db-incline-bench", name: "DB Incline Bench", sets: 2, target: "8 reps", metric: "reps", restSec: 90 },
        {
          id: "hip-thrust",
          name: "Hip Thrust (barbell or machine)",
          sets: 2,
          target: "8 reps",
          metric: "reps",
          restSec: 90,
        },
        {
          id: "cable-chop",
          name: "Cable Chop (anti-rotation)",
          sets: 2,
          target: "10 / side",
          metric: "reps",
          restSec: 60,
        },
        {
          id: "copenhagen-plank-short",
          name: "Copenhagen plank (short lever)",
          sets: 2,
          target: "20-30 sec",
          metric: "seconds",
          restSec: 60,
        },
      ],
      home: [
        {
          id: "bulgarian-split-squat-heavier",
          name: "Bulgarian Split Squat (heavier)",
          sets: 3,
          target: "6 / leg",
          metric: "reps",
          restSec: 120,
        },
        { id: "band-or-towel-rows", name: "Band or Towel Rows", sets: 3, target: "8 reps", metric: "reps", restSec: 90 },
        { id: "db-floor-press", name: "DB Floor Press", sets: 2, target: "8 reps", metric: "reps", restSec: 90 },
        {
          id: "single-leg-glute-bridge",
          name: "Glute Bridge (single-leg)",
          sets: 2,
          target: "8 / leg",
          metric: "reps",
          restSec: 75,
        },
        { id: "band-chop", name: "Band Chop", sets: 2, target: "10 / side", metric: "reps", restSec: 60 },
        {
          id: "copenhagen-plank-knee",
          name: "Copenhagen plank (knee on bench)",
          sets: 2,
          target: "20 sec",
          metric: "seconds",
          restSec: 60,
        },
      ],
    },
  },
];

const state = {
  location: "gym",
  selectedWorkoutId: WORKOUTS[0].id,
  sessions: [],
  activeSessionId: null,
  drafts: {},
  cloud: {
    token: "",
    gistId: "",
    autoSync: false,
    syncInFlight: false,
    lastSyncAt: null,
    statusText: "Cloud sync is off.",
    statusKind: "neutral",
  },
  timer: {
    duration: DEFAULT_TIMER_SECONDS,
    remaining: DEFAULT_TIMER_SECONDS,
    running: false,
    endAt: null,
    label: "Ready when you are.",
  },
  timerInterval: null,
  statusTimeout: null,
  cloudSyncTimeout: null,
};

const els = {
  sessionDate: document.getElementById("session-date"),
  locationToggle: document.getElementById("location-toggle"),
  workoutList: document.getElementById("workout-list"),
  historyList: document.getElementById("history-list"),
  exerciseList: document.getElementById("exercise-list"),
  sessionTitle: document.getElementById("session-title"),
  sessionMeta: document.getElementById("session-meta"),
  progressText: document.getElementById("progress-text"),
  progressFill: document.getElementById("progress-fill"),
  statusNote: document.getElementById("status-note"),
  sessionNotes: document.getElementById("session-notes"),
  finishSession: document.getElementById("finish-session"),
  newSession: document.getElementById("new-session"),
  clearHistory: document.getElementById("clear-history"),
  cloudToken: document.getElementById("cloud-token"),
  cloudGist: document.getElementById("cloud-gist"),
  cloudAuto: document.getElementById("cloud-auto"),
  cloudConnect: document.getElementById("cloud-connect"),
  cloudPush: document.getElementById("cloud-push"),
  cloudPull: document.getElementById("cloud-pull"),
  cloudDisconnect: document.getElementById("cloud-disconnect"),
  cloudBadge: document.getElementById("cloud-badge"),
  cloudStatus: document.getElementById("cloud-status"),
  timerDisplay: document.getElementById("timer-display"),
  timerLabel: document.getElementById("timer-label"),
  timerPresets: document.getElementById("timer-presets"),
  timerToggle: document.getElementById("timer-toggle"),
  timerReset: document.getElementById("timer-reset"),
};

init();

function init() {
  hydrateFromStorage();
  if (!els.sessionDate.value) {
    els.sessionDate.value = todayISO();
  }
  attachEvents();
  ensureActiveSession();
  renderAll();
  registerServiceWorker();
}

function attachEvents() {
  els.sessionDate.addEventListener("change", () => {
    state.activeSessionId = null;
    ensureActiveSession();
    persist();
    renderAll();
  });

  els.locationToggle.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-location]");
    if (!btn) {
      return;
    }
    state.location = btn.dataset.location;
    state.activeSessionId = null;
    ensureActiveSession();
    persist();
    renderAll();
  });

  els.workoutList.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-workout-id]");
    if (!btn) {
      return;
    }
    state.selectedWorkoutId = btn.dataset.workoutId;
    state.activeSessionId = null;
    ensureActiveSession();
    persist();
    renderAll();
  });

  els.exerciseList.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-action]");
    if (!btn) {
      return;
    }
    const action = btn.dataset.action;
    const card = btn.closest("article[data-exercise-id]");
    if (!card) {
      return;
    }

    if (action === "log-set") {
      handleLogSet(card.dataset.exerciseId, card);
      return;
    }

    if (action === "undo-set") {
      handleUndoSet(card.dataset.exerciseId);
    }
  });

  els.sessionNotes.addEventListener("input", () => {
    const session = getActiveSession();
    if (!session || session.completedAt) {
      return;
    }
    session.notes = els.sessionNotes.value;
    session.updatedAt = new Date().toISOString();
    persist();
  });

  els.finishSession.addEventListener("click", () => {
    const session = getActiveSession();
    if (!session) {
      return;
    }
    if (session.completedAt) {
      session.completedAt = null;
      session.updatedAt = new Date().toISOString();
      setStatus("Session reopened.");
    } else {
      session.completedAt = new Date().toISOString();
      session.updatedAt = new Date().toISOString();
      setStatus("Session marked complete.");
    }
    persist();
    renderAll();
  });

  els.newSession.addEventListener("click", () => {
    ensureActiveSession({ forceNew: true });
    persist();
    setStatus("Fresh session started for this workout.");
    renderAll();
  });

  els.clearHistory.addEventListener("click", () => {
    if (!window.confirm("Clear all saved sessions? This cannot be undone.")) {
      return;
    }
    state.sessions = [];
    state.activeSessionId = null;
    ensureActiveSession();
    persist();
    setStatus("History cleared.");
    renderAll();
  });

  els.cloudConnect.addEventListener("click", async () => {
    await connectCloudSync();
  });

  els.cloudPush.addEventListener("click", async () => {
    await pushCloudData();
  });

  els.cloudPull.addEventListener("click", async () => {
    await pullCloudData();
  });

  els.cloudDisconnect.addEventListener("click", () => {
    if (!window.confirm("Disconnect cloud sync on this device? Local workout data will stay here.")) {
      return;
    }
    disconnectCloudSync();
  });

  els.cloudAuto.addEventListener("change", () => {
    state.cloud.autoSync = Boolean(els.cloudAuto.checked);
    if (state.cloud.autoSync && isCloudConfigured()) {
      setCloudStatus("Auto-sync enabled.", "success");
      scheduleAutoCloudSync();
    } else if (state.cloud.autoSync) {
      setCloudStatus("Auto-sync will start after you connect cloud sync.", "neutral");
    } else {
      setCloudStatus("Auto-sync disabled.", "neutral");
    }
    persist({ skipCloudAutoSync: true });
    renderCloudSection();
  });

  els.historyList.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-session-id]");
    if (!btn) {
      return;
    }
    const session = state.sessions.find((item) => item.id === btn.dataset.sessionId);
    if (!session) {
      return;
    }

    state.activeSessionId = session.id;
    state.selectedWorkoutId = session.workoutId;
    state.location = session.location;
    els.sessionDate.value = session.dateISO;
    persist();
    renderAll();
  });

  els.timerPresets.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-seconds]");
    if (!btn) {
      return;
    }
    const seconds = Number(btn.dataset.seconds);
    if (!Number.isFinite(seconds) || seconds <= 0) {
      return;
    }
    startTimer(seconds, `Manual rest (${formatRest(seconds)})`);
  });

  els.timerToggle.addEventListener("click", () => {
    if (state.timer.running) {
      pauseTimer();
      return;
    }
    resumeTimer();
  });

  els.timerReset.addEventListener("click", () => {
    resetTimer();
  });
}

function hydrateFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    if (parsed && parsed.location && ["gym", "home"].includes(parsed.location)) {
      state.location = parsed.location;
    }
    if (parsed && parsed.selectedWorkoutId && getWorkout(parsed.selectedWorkoutId)) {
      state.selectedWorkoutId = parsed.selectedWorkoutId;
    }
    if (parsed && Array.isArray(parsed.sessions)) {
      state.sessions = parsed.sessions;
    }
    if (parsed && parsed.cloud && typeof parsed.cloud === "object") {
      state.cloud.token = typeof parsed.cloud.token === "string" ? parsed.cloud.token : "";
      state.cloud.gistId = typeof parsed.cloud.gistId === "string" ? parsed.cloud.gistId : "";
      state.cloud.autoSync = Boolean(parsed.cloud.autoSync);
      state.cloud.lastSyncAt = typeof parsed.cloud.lastSyncAt === "string" ? parsed.cloud.lastSyncAt : null;
      if (isCloudConfigured()) {
        state.cloud.statusText = state.cloud.lastSyncAt
          ? `Connected. Last sync ${formatDateTime(state.cloud.lastSyncAt)}.`
          : "Connected. Ready to sync.";
      }
    }
  } catch (error) {
    console.error("Storage parse failed:", error);
  }
}

function persist(options = {}) {
  const { skipCloudAutoSync = false } = options;
  const payload = {
    location: state.location,
    selectedWorkoutId: state.selectedWorkoutId,
    sessions: state.sessions,
    cloud: {
      token: state.cloud.token,
      gistId: state.cloud.gistId,
      autoSync: state.cloud.autoSync,
      lastSyncAt: state.cloud.lastSyncAt,
    },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  if (!skipCloudAutoSync) {
    scheduleAutoCloudSync();
  }
}

function ensureActiveSession(options = {}) {
  const { forceNew = false } = options;
  const workoutId = state.selectedWorkoutId;
  const dateISO = getSelectedDate();
  const location = state.location;

  if (!workoutId || !dateISO) {
    return null;
  }

  let active = forceNew ? null : state.sessions.find((item) => item.id === state.activeSessionId);

  if (
    active &&
    active.workoutId === workoutId &&
    active.location === location &&
    active.dateISO === dateISO
  ) {
    return active;
  }

  if (!forceNew) {
    const matching = state.sessions
      .filter(
        (item) =>
          item.workoutId === workoutId &&
          item.location === location &&
          item.dateISO === dateISO,
      )
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    if (matching.length > 0) {
      state.activeSessionId = matching[0].id;
      return matching[0];
    }
  }

  const fresh = {
    id: createId(),
    workoutId,
    location,
    dateISO,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    completedAt: null,
    logs: {},
    notes: "",
  };
  state.sessions.push(fresh);
  state.activeSessionId = fresh.id;
  return fresh;
}

function getActiveSession() {
  return state.sessions.find((item) => item.id === state.activeSessionId) || ensureActiveSession();
}

function getSelectedDate() {
  return els.sessionDate.value || todayISO();
}

function getWorkout(workoutId) {
  return WORKOUTS.find((item) => item.id === workoutId) || null;
}

function renderAll() {
  const session = ensureActiveSession();
  renderLocationToggle();
  renderWorkoutList();
  renderSessionHeader(session);
  renderExercises(session);
  renderProgress(session);
  renderHistory();
  renderCloudSection();
  renderNotes(session);
  renderTimer();
}

function renderLocationToggle() {
  Array.from(els.locationToggle.querySelectorAll("button[data-location]")).forEach((btn) => {
    const active = btn.dataset.location === state.location;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-checked", active ? "true" : "false");
  });
}

function renderWorkoutList() {
  els.workoutList.innerHTML = WORKOUTS.map((workout) => {
    const isActive = workout.id === state.selectedWorkoutId;
    return `
      <button type="button" class="workout-btn ${isActive ? "active" : ""}" data-workout-id="${workout.id}">
        <strong>Week ${workout.week} • ${workout.day}</strong>
        <small>${workout.title}</small>
      </button>
    `;
  }).join("");
}

function renderSessionHeader(session) {
  if (!session) {
    els.sessionTitle.textContent = "Select a workout";
    els.sessionMeta.textContent = "";
    return;
  }

  const workout = getWorkout(session.workoutId);
  if (!workout) {
    els.sessionTitle.textContent = "Workout not found";
    els.sessionMeta.textContent = "";
    return;
  }

  els.sessionTitle.innerHTML = `Week ${workout.week} ${workout.day} - ${workout.title}${
    session.completedAt ? '<span class="done-pill">Done</span>' : ""
  }`;
  els.sessionMeta.textContent = `${titleCase(session.location)} plan • ${formatDate(session.dateISO)}`;

  els.finishSession.textContent = session.completedAt ? "Reopen Session" : "Finish Session";
}

function renderExercises(session) {
  if (!session) {
    els.exerciseList.innerHTML = "<p class='empty-state'>Select a workout to begin.</p>";
    return;
  }

  const exercises = getExercises(session);
  if (exercises.length === 0) {
    els.exerciseList.innerHTML = "<p class='empty-state'>No exercises found for this view.</p>";
    return;
  }

  const sessionLocked = Boolean(session.completedAt);

  els.exerciseList.innerHTML = exercises
    .map((exercise, index) => {
      const logs = Array.isArray(session.logs[exercise.id]) ? session.logs[exercise.id] : [];
      const doneCount = logs.length;
      const lastInfo = getLastSetInfo(exercise.id, session.id);
      const draft = state.drafts[exercise.id] || {};
      const repLabel = exercise.metric === "seconds" ? "Seconds" : "Reps";
      const completed = doneCount >= exercise.sets;
      const logDisabled = sessionLocked || completed;

      const setList = logs.length
        ? `<ol class="set-log">${logs
            .map((entry, setIndex) => `<li>Set ${setIndex + 1}: ${formatSetEntry(entry, exercise.metric)}</li>`)
            .join("")}</ol>`
        : "<p class='last-log'>No sets logged yet.</p>";

      const lastLine = lastInfo
        ? `<p class="last-log">Last: ${formatSetEntry(lastInfo.set, exercise.metric)} on ${formatDate(lastInfo.dateISO)}</p>`
        : "<p class='last-log'>Last: no prior data yet.</p>";

      return `
        <article class="exercise-card" data-exercise-id="${exercise.id}" style="animation-delay: ${index * 45}ms">
          <div class="exercise-head">
            <div>
              <h3>${index + 1}. ${exercise.name}</h3>
              <p class="exercise-meta">${exercise.sets} x ${exercise.target}</p>
              ${lastLine}
            </div>
            <div class="exercise-chips">
              <span class="chip rest">Rest ${formatRest(exercise.restSec)}</span>
              <span class="chip count">${doneCount}/${exercise.sets} sets${completed ? " done" : ""}</span>
            </div>
          </div>
          <div class="set-entry">
            <label class="field">
              <span>Weight (lb)</span>
              <input type="number" step="0.5" min="0" data-field="weight" value="${valueOrEmpty(draft.weight)}" ${
        sessionLocked ? "disabled" : ""
      } />
            </label>
            <label class="field">
              <span>${repLabel}</span>
              <input type="number" step="1" min="1" data-field="effort" value="${valueOrEmpty(draft.effort)}" ${
        sessionLocked ? "disabled" : ""
      } />
            </label>
            <label class="field">
              <span>RPE (optional)</span>
              <input type="number" step="0.5" min="1" max="10" data-field="rpe" value="${valueOrEmpty(draft.rpe)}" ${
        sessionLocked ? "disabled" : ""
      } />
            </label>
            <button type="button" class="primary" data-action="log-set" ${logDisabled ? "disabled" : ""}>Log Set</button>
            <button type="button" class="secondary" data-action="undo-set" ${sessionLocked || doneCount === 0 ? "disabled" : ""}>Undo</button>
          </div>
          ${setList}
        </article>
      `;
    })
    .join("");
}

function renderProgress(session) {
  if (!session) {
    els.progressText.textContent = "0 / 0 sets";
    els.progressFill.style.width = "0%";
    return;
  }

  const exercises = getExercises(session);
  const targetSets = exercises.reduce((sum, exercise) => sum + exercise.sets, 0);
  const loggedSets = countLoggedSets(session);
  const progress = targetSets > 0 ? Math.min(100, Math.round((loggedSets / targetSets) * 100)) : 0;

  els.progressText.textContent = `${loggedSets} / ${targetSets} sets`;
  els.progressFill.style.width = `${progress}%`;
}

function renderHistory() {
  const sorted = [...state.sessions].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  if (sorted.length === 0) {
    els.historyList.innerHTML = "<p class='empty-state'>No sessions yet.</p>";
    return;
  }

  els.historyList.innerHTML = sorted
    .slice(0, 12)
    .map((session) => {
      const workout = getWorkout(session.workoutId);
      const label = workout ? `W${workout.week} ${workout.day}` : "Workout";
      const loggedSets = countLoggedSets(session);
      const targetSets = getExercises(session).reduce((sum, exercise) => sum + exercise.sets, 0);
      const doneText = session.completedAt ? "Done" : "In progress";
      const activeClass = session.id === state.activeSessionId ? "active" : "";

      return `
        <button type="button" class="history-btn ${activeClass}" data-session-id="${session.id}">
          <strong>${formatDate(session.dateISO)} - ${label}</strong>
          <small>${titleCase(session.location)} • ${loggedSets}/${targetSets} sets • ${doneText}</small>
        </button>
      `;
    })
    .join("");
}

function renderCloudSection() {
  const connected = isCloudConfigured();
  const busy = state.cloud.syncInFlight;

  if (document.activeElement !== els.cloudToken) {
    els.cloudToken.value = state.cloud.token || "";
  }
  if (document.activeElement !== els.cloudGist) {
    els.cloudGist.value = state.cloud.gistId || "";
  }
  els.cloudAuto.checked = Boolean(state.cloud.autoSync);

  els.cloudBadge.textContent = connected ? "Connected" : "Not connected";
  els.cloudBadge.classList.toggle("connected", connected);
  els.cloudConnect.textContent = connected ? "Save" : "Connect";

  els.cloudConnect.disabled = busy;
  els.cloudPush.disabled = busy || !connected;
  els.cloudPull.disabled = busy || !connected;
  els.cloudDisconnect.disabled = busy || (!state.cloud.token && !state.cloud.gistId);
  els.cloudToken.disabled = busy;
  els.cloudGist.disabled = busy;
  els.cloudAuto.disabled = busy;

  els.cloudStatus.textContent = state.cloud.statusText || "Cloud sync is off.";
  els.cloudStatus.classList.remove("error", "success");
  if (state.cloud.statusKind === "error") {
    els.cloudStatus.classList.add("error");
  } else if (state.cloud.statusKind === "success") {
    els.cloudStatus.classList.add("success");
  }
}

async function connectCloudSync() {
  const token = (els.cloudToken.value || "").trim();
  const gistInput = normalizeGistId(els.cloudGist.value || "");

  if (!token) {
    setCloudStatus("Enter a GitHub token with gist access.", "error");
    renderCloudSection();
    return;
  }

  setCloudBusy(true, "Connecting to GitHub...");
  try {
    let gistId = gistInput;
    if (!gistId) {
      gistId = await createCloudGist(token, buildCloudPayload());
    } else {
      await getCloudGist(token, gistId);
    }

    state.cloud.token = token;
    state.cloud.gistId = gistId;
    state.cloud.autoSync = Boolean(els.cloudAuto.checked);
    state.cloud.lastSyncAt = state.cloud.lastSyncAt || null;
    setCloudStatus(`Connected to gist ${shortId(gistId)}.`, "success");
    persist({ skipCloudAutoSync: true });
  } catch (error) {
    console.error(error);
    setCloudStatus(`Connect failed: ${error.message}`, "error");
  } finally {
    state.cloud.syncInFlight = false;
    renderCloudSection();
  }
}

function disconnectCloudSync() {
  if (state.cloudSyncTimeout) {
    window.clearTimeout(state.cloudSyncTimeout);
    state.cloudSyncTimeout = null;
  }

  state.cloud.token = "";
  state.cloud.gistId = "";
  state.cloud.autoSync = false;
  state.cloud.lastSyncAt = null;
  state.cloud.syncInFlight = false;
  setCloudStatus("Cloud sync is off.", "neutral");
  persist({ skipCloudAutoSync: true });
  renderCloudSection();
}

async function pushCloudData(options = {}) {
  const { silent = false } = options;
  if (!isCloudConfigured()) {
    if (!silent) {
      setCloudStatus("Connect cloud sync first.", "error");
      renderCloudSection();
    }
    return;
  }
  if (state.cloud.syncInFlight) {
    return;
  }
  if (state.cloudSyncTimeout) {
    window.clearTimeout(state.cloudSyncTimeout);
    state.cloudSyncTimeout = null;
  }

  setCloudBusy(true, silent ? "Auto-syncing..." : "Uploading data...");
  try {
    await saveCloudPayload(state.cloud.token, state.cloud.gistId, buildCloudPayload());
    state.cloud.lastSyncAt = new Date().toISOString();
    setCloudStatus(`Synced at ${formatDateTime(state.cloud.lastSyncAt)}.`, "success");
    persist({ skipCloudAutoSync: true });
  } catch (error) {
    console.error(error);
    setCloudStatus(`Push failed: ${error.message}`, "error");
  } finally {
    state.cloud.syncInFlight = false;
    renderCloudSection();
  }
}

async function pullCloudData() {
  if (!isCloudConfigured()) {
    setCloudStatus("Connect cloud sync first.", "error");
    renderCloudSection();
    return;
  }
  if (state.cloud.syncInFlight) {
    return;
  }
  if (state.cloudSyncTimeout) {
    window.clearTimeout(state.cloudSyncTimeout);
    state.cloudSyncTimeout = null;
  }

  setCloudBusy(true, "Downloading data...");
  try {
    const gist = await getCloudGist(state.cloud.token, state.cloud.gistId);
    const payload = await parseCloudPayloadFromGist(gist, state.cloud.token);

    if (!payload || !Array.isArray(payload.sessions)) {
      throw new Error("Cloud data format is invalid.");
    }

    if (state.sessions.length > 0) {
      const shouldReplace = window.confirm(
        "Pulling cloud data will replace this device's local workout history. Continue?",
      );
      if (!shouldReplace) {
        setCloudStatus("Pull cancelled.", "neutral");
        state.cloud.syncInFlight = false;
        renderCloudSection();
        return;
      }
    }

    applyCloudPayload(payload);
    state.cloud.lastSyncAt = new Date().toISOString();
    setCloudStatus(`Pulled at ${formatDateTime(state.cloud.lastSyncAt)}.`, "success");
    persist({ skipCloudAutoSync: true });
    renderAll();
  } catch (error) {
    console.error(error);
    setCloudStatus(`Pull failed: ${error.message}`, "error");
  } finally {
    state.cloud.syncInFlight = false;
    renderCloudSection();
  }
}

function scheduleAutoCloudSync() {
  if (!state.cloud.autoSync || !isCloudConfigured() || state.cloud.syncInFlight) {
    return;
  }
  if (state.cloudSyncTimeout) {
    window.clearTimeout(state.cloudSyncTimeout);
  }
  state.cloudSyncTimeout = window.setTimeout(() => {
    state.cloudSyncTimeout = null;
    pushCloudData({ silent: true });
  }, CLOUD_SYNC_DEBOUNCE_MS);
}

function isCloudConfigured() {
  return Boolean(state.cloud.token && state.cloud.gistId);
}

function setCloudBusy(isBusy, message) {
  state.cloud.syncInFlight = isBusy;
  if (message) {
    setCloudStatus(message, "neutral");
  }
  renderCloudSection();
}

function setCloudStatus(message, kind = "neutral") {
  state.cloud.statusText = message;
  state.cloud.statusKind = kind;
}

function buildCloudPayload() {
  return {
    schemaVersion: 1,
    exportedAt: new Date().toISOString(),
    location: state.location,
    selectedWorkoutId: state.selectedWorkoutId,
    dateISO: getSelectedDate(),
    sessions: state.sessions,
  };
}

function applyCloudPayload(payload) {
  state.sessions = Array.isArray(payload.sessions) ? payload.sessions : [];
  state.location = ["gym", "home"].includes(payload.location) ? payload.location : "gym";
  state.selectedWorkoutId = getWorkout(payload.selectedWorkoutId)
    ? payload.selectedWorkoutId
    : WORKOUTS[0].id;
  state.activeSessionId = null;
  state.drafts = {};

  const dateCandidate = typeof payload.dateISO === "string" ? payload.dateISO : getLatestSessionDate(state.sessions);
  els.sessionDate.value = dateCandidate || todayISO();
  ensureActiveSession();
}

function getLatestSessionDate(sessions) {
  if (!Array.isArray(sessions) || sessions.length === 0) {
    return null;
  }
  const dates = sessions
    .map((session) => session.dateISO)
    .filter((value) => typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value))
    .sort();
  return dates.length ? dates[dates.length - 1] : null;
}

function normalizeGistId(value) {
  const raw = String(value || "").trim();
  if (!raw) {
    return "";
  }

  try {
    const parsed = new URL(raw);
    const chunks = parsed.pathname.split("/").filter(Boolean);
    return chunks.length ? chunks[chunks.length - 1] : raw;
  } catch (_error) {
    return raw;
  }
}

async function createCloudGist(token, payload) {
  const body = {
    description: "Runner Strength Log cloud sync data",
    public: false,
    files: {
      [CLOUD_FILE_NAME]: {
        content: JSON.stringify(payload, null, 2),
      },
    },
  };
  const gist = await githubRequest("https://api.github.com/gists", token, {
    method: "POST",
    body: JSON.stringify(body),
  });
  if (!gist || !gist.id) {
    throw new Error("Could not create gist.");
  }
  return gist.id;
}

async function saveCloudPayload(token, gistId, payload) {
  const body = {
    files: {
      [CLOUD_FILE_NAME]: {
        content: JSON.stringify(payload, null, 2),
      },
    },
  };
  await githubRequest(`https://api.github.com/gists/${encodeURIComponent(gistId)}`, token, {
    method: "PATCH",
    body: JSON.stringify(body),
  });
}

async function getCloudGist(token, gistId) {
  return githubRequest(`https://api.github.com/gists/${encodeURIComponent(gistId)}`, token);
}

async function parseCloudPayloadFromGist(gist, token) {
  if (!gist || !gist.files || typeof gist.files !== "object") {
    throw new Error("Gist response was missing files.");
  }

  const preferred = gist.files[CLOUD_FILE_NAME];
  const fallback = preferred || Object.values(gist.files)[0];
  if (!fallback) {
    throw new Error("No file found in gist.");
  }

  let content = fallback.content;
  if (!content && fallback.raw_url) {
    const response = await fetch(fallback.raw_url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to read gist file (${response.status}).`);
    }
    content = await response.text();
  }

  if (!content) {
    throw new Error("Gist file had no readable content.");
  }

  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch (_error) {
    throw new Error("Gist file is not valid JSON.");
  }

  if (!parsed || typeof parsed !== "object" || !Array.isArray(parsed.sessions)) {
    throw new Error("Gist JSON did not contain workout sessions.");
  }

  return parsed;
}

async function githubRequest(url, token, options = {}) {
  const response = await fetch(url, {
    method: options.method || "GET",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: options.body,
  });

  const text = await response.text();
  let payload = null;
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch (_error) {
      payload = null;
    }
  }

  if (!response.ok) {
    const errorMessage = payload && payload.message ? payload.message : `${response.status} ${response.statusText}`;
    throw new Error(errorMessage);
  }

  return payload;
}

function renderNotes(session) {
  if (!session) {
    els.sessionNotes.value = "";
    els.sessionNotes.disabled = true;
    return;
  }

  els.sessionNotes.disabled = Boolean(session.completedAt);
  if (document.activeElement !== els.sessionNotes) {
    els.sessionNotes.value = session.notes || "";
  }
}

function handleLogSet(exerciseId, card) {
  const session = getActiveSession();
  if (!session) {
    return;
  }
  if (session.completedAt) {
    setStatus("Session is complete. Reopen it to add sets.");
    return;
  }

  const exercise = getExercises(session).find((item) => item.id === exerciseId);
  if (!exercise) {
    return;
  }

  const effortInput = card.querySelector('input[data-field="effort"]');
  const weightInput = card.querySelector('input[data-field="weight"]');
  const rpeInput = card.querySelector('input[data-field="rpe"]');

  const effort = parseNumber(effortInput ? effortInput.value : "");
  const weight = parseNumber(weightInput ? weightInput.value : "");
  const rpe = parseNumber(rpeInput ? rpeInput.value : "");

  if (!effort || effort <= 0) {
    setStatus(`Enter ${exercise.metric === "seconds" ? "seconds" : "reps"} before logging.`);
    return;
  }

  const logs = Array.isArray(session.logs[exercise.id]) ? session.logs[exercise.id] : [];
  if (logs.length >= exercise.sets) {
    setStatus(`${exercise.name}: all planned sets are already logged. Use Undo to edit.`);
    return;
  }

  const entry = {
    loggedAt: new Date().toISOString(),
    weight: weight || null,
    effort,
    rpe: rpe || null,
  };

  logs.push(entry);
  session.logs[exercise.id] = logs;
  session.updatedAt = new Date().toISOString();

  state.drafts[exercise.id] = {
    weight: weight || state.drafts[exercise.id]?.weight || "",
    effort: "",
    rpe: "",
  };

  persist();
  setStatus(`${exercise.name}: set ${logs.length} logged.`);
  startTimer(exercise.restSec, `${exercise.name} (set ${logs.length})`);
  renderAll();
}

function handleUndoSet(exerciseId) {
  const session = getActiveSession();
  if (!session || session.completedAt) {
    return;
  }

  const logs = Array.isArray(session.logs[exerciseId]) ? session.logs[exerciseId] : [];
  if (logs.length === 0) {
    return;
  }

  logs.pop();
  session.logs[exerciseId] = logs;
  session.updatedAt = new Date().toISOString();
  persist();
  setStatus("Last set removed.");
  renderAll();
}

function getExercises(session) {
  const workout = getWorkout(session.workoutId);
  if (!workout) {
    return [];
  }
  return workout.versions[session.location] || [];
}

function getLastSetInfo(exerciseId, excludeSessionId) {
  const candidates = state.sessions
    .filter((session) => {
      if (session.id === excludeSessionId) {
        return false;
      }
      return Array.isArray(session.logs?.[exerciseId]) && session.logs[exerciseId].length > 0;
    })
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  if (candidates.length === 0) {
    return null;
  }

  const session = candidates[0];
  const set = session.logs[exerciseId][session.logs[exerciseId].length - 1];
  return {
    set,
    dateISO: session.dateISO,
  };
}

function countLoggedSets(session) {
  return Object.values(session.logs || {}).reduce((sum, entries) => {
    if (!Array.isArray(entries)) {
      return sum;
    }
    return sum + entries.length;
  }, 0);
}

function startTimer(seconds, label) {
  const safeSeconds = Number.isFinite(seconds) && seconds > 0 ? Math.round(seconds) : DEFAULT_TIMER_SECONDS;

  stopTimerLoop();
  state.timer.duration = safeSeconds;
  state.timer.remaining = safeSeconds;
  state.timer.endAt = Date.now() + safeSeconds * 1000;
  state.timer.running = true;
  state.timer.label = `Resting: ${label}`;

  state.timerInterval = window.setInterval(tickTimer, 250);
  renderTimer();
}

function resumeTimer() {
  if (state.timer.running) {
    return;
  }

  if (state.timer.remaining <= 0) {
    state.timer.remaining = state.timer.duration;
  }

  state.timer.endAt = Date.now() + state.timer.remaining * 1000;
  state.timer.running = true;
  state.timer.label = "Rest timer running.";
  stopTimerLoop();
  state.timerInterval = window.setInterval(tickTimer, 250);
  renderTimer();
}

function pauseTimer() {
  if (!state.timer.running) {
    return;
  }
  const remaining = Math.max(0, Math.ceil((state.timer.endAt - Date.now()) / 1000));
  state.timer.remaining = remaining;
  state.timer.endAt = null;
  state.timer.running = false;
  state.timer.label = "Timer paused.";
  stopTimerLoop();
  renderTimer();
}

function resetTimer() {
  stopTimerLoop();
  state.timer.running = false;
  state.timer.endAt = null;
  state.timer.remaining = state.timer.duration;
  state.timer.label = "Ready when you are.";
  renderTimer();
}

function tickTimer() {
  if (!state.timer.running || !state.timer.endAt) {
    return;
  }

  const next = Math.max(0, Math.ceil((state.timer.endAt - Date.now()) / 1000));
  if (next !== state.timer.remaining) {
    state.timer.remaining = next;
    renderTimer();
  }

  if (next <= 0) {
    stopTimerLoop();
    state.timer.running = false;
    state.timer.endAt = null;
    state.timer.remaining = 0;
    state.timer.label = "Rest complete. Ready for your next set.";
    ringBell();
    renderTimer();
  }
}

function renderTimer() {
  els.timerDisplay.textContent = formatRest(state.timer.remaining);
  els.timerLabel.textContent = state.timer.label;

  if (state.timer.running) {
    els.timerToggle.textContent = "Pause";
  } else {
    const hasProgress = state.timer.remaining < state.timer.duration;
    els.timerToggle.textContent = hasProgress ? "Resume" : "Start";
  }
}

function stopTimerLoop() {
  if (state.timerInterval) {
    window.clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function ringBell() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return;
  }

  try {
    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(900, context.currentTime);
    gain.gain.setValueAtTime(0.001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, context.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.28);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.3);
    oscillator.onended = () => context.close();
  } catch (error) {
    console.error("Audio playback failed:", error);
  }
}

function setStatus(message) {
  els.statusNote.textContent = message;
  if (state.statusTimeout) {
    window.clearTimeout(state.statusTimeout);
  }
  state.statusTimeout = window.setTimeout(() => {
    if (els.statusNote.textContent === message) {
      els.statusNote.textContent = "";
    }
  }, 3600);
}

function formatSetEntry(entry, metric) {
  const parts = [];
  if (entry.weight) {
    parts.push(`${trimZeros(entry.weight)} lb`);
  }
  if (metric === "seconds") {
    parts.push(`${trimZeros(entry.effort)} sec`);
  } else {
    parts.push(`${trimZeros(entry.effort)} reps`);
  }
  if (entry.rpe) {
    parts.push(`RPE ${trimZeros(entry.rpe)}`);
  }
  return parts.join(" x ");
}

function formatRest(totalSeconds) {
  const safe = Math.max(0, Math.round(totalSeconds));
  const minutes = Math.floor(safe / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (safe % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function formatDate(isoDate) {
  const parsed = new Date(`${isoDate}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return isoDate;
  }
  return parsed.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatDateTime(isoDateTime) {
  const parsed = new Date(isoDateTime);
  if (Number.isNaN(parsed.getTime())) {
    return isoDateTime;
  }
  return parsed.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function parseNumber(value) {
  const cleaned = String(value || "").trim();
  if (!cleaned) {
    return null;
  }
  const parsed = Number(cleaned);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return null;
  }
  return parsed;
}

function trimZeros(value) {
  if (!Number.isFinite(value)) {
    return value;
  }
  if (Number.isInteger(value)) {
    return String(value);
  }
  return value.toFixed(2).replace(/\.0+$/, "").replace(/(\.\d*[1-9])0+$/, "$1");
}

function valueOrEmpty(value) {
  return value === null || value === undefined ? "" : String(value);
}

function todayISO() {
  const now = new Date();
  const offsetMs = now.getTimezoneOffset() * 60 * 1000;
  return new Date(now.getTime() - offsetMs).toISOString().slice(0, 10);
}

function titleCase(value) {
  if (!value) {
    return "";
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function shortId(value) {
  if (!value || value.length < 10) {
    return value;
  }
  return `${value.slice(0, 5)}...${value.slice(-4)}`;
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.error("Service worker registration failed:", error);
    });
  });
}

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `session-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
}
