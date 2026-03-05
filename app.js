const STORAGE_KEY = "runner-strength-log.v1";
const DEFAULT_TIMER_SECONDS = 90;

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
  timer: {
    duration: DEFAULT_TIMER_SECONDS,
    remaining: DEFAULT_TIMER_SECONDS,
    running: false,
    endAt: null,
    label: "Ready when you are.",
  },
  timerInterval: null,
  statusTimeout: null,
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
  } catch (error) {
    console.error("Storage parse failed:", error);
  }
}

function persist() {
  const payload = {
    location: state.location,
    selectedWorkoutId: state.selectedWorkoutId,
    sessions: state.sessions,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
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
