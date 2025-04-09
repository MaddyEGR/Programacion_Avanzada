(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_adad3f34._.js", {

"[project]/features/habit/habitAPI.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchHabits": (()=>fetchHabits)
});
const fetchHabits = async ()=>{
    const response = await fetch("http://localhost:3001/api/habits");
    if (!response.ok) {
        throw new Error("Failed to fetch habits");
    }
    return response.json();
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/features/habit/habitSlice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "addHabit": (()=>addHabit),
    "addHabits": (()=>addHabits),
    "default": (()=>__TURBOPACK__default__export__),
    "fetchHabitsThunk": (()=>fetchHabitsThunk),
    "markAsDoneThunk": (()=>markAsDoneThunk),
    "removeHabit": (()=>removeHabit)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$habit$2f$habitAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/habit/habitAPI.ts [app-client] (ecmascript)");
;
;
const initialState = {
    habits: [],
    status: {},
    error: {}
};
const fetchHabitsThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("habit/fetchHabits", async ()=>{
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$habit$2f$habitAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHabits"])();
});
const markAsDoneThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("habit/markAsDone", async (_id, { rejectWithValue })=>{
    const response = await fetch(`http://localhost:3001/api/habits/markasdone${_id}/done`, {
        method: "POST"
    });
    const responseJson = await response.json();
    if (!response.ok) {
        return rejectWithValue("Fallo al marcar como hecho");
    } else if (responseJson.message.toString() === "Habito reiniciado") {
        return rejectWithValue(responseJson.message);
    } else {
        return responseJson;
    }
});
const habitSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "habit",
    initialState,
    reducers: {
        addHabits: (state, action)=>{
            state.habits = action.payload;
        },
        addHabit: (state, action)=>{
            state.habits.push(action.payload);
        },
        removeHabit: (state, action)=>{
            state.habits = state.habits.filter((habit)=>habit._id !== action.payload);
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchHabitsThunk.fulfilled, (state, action)=>{
            state.habits = Array.isArray(action.payload) ? action.payload : [];
        }).addCase(markAsDoneThunk.fulfilled, (state, action)=>{
            const habitId1 = action.meta.arg;
            if (!state.status[habitId1]) {
                state.status[habitId1] = "idle"; // Establecer un valor predeterminado
            }
            state.status[action.meta.arg] = "success";
            state.error[action.meta.arg] = null;
        }).addCase(markAsDoneThunk.rejected, (state, action)=>{
            if (!state.status[habitId]) {
                state.status[habitId] = "idle"; // Establecer un valor predeterminado
            }
            state.status[action.meta.arg] = "failed";
            state.error[action.meta.arg] = action.payload;
        });
    }
});
const { addHabits, addHabit, removeHabit } = habitSlice.actions;
const __TURBOPACK__default__export__ = habitSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Redux/store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "makeStore": (()=>makeStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$habit$2f$habitSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/habit/habitSlice.ts [app-client] (ecmascript)");
;
;
const makeStore = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
        reducer: {
            habit: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$habit$2f$habitSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        }
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/StoreProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>StoreProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Redux/store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function StoreProvider({ children }) {
    _s();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!store.current) {
        store.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeStore"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: store.current,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/StoreProvider.tsx",
        lineNumber: 12,
        columnNumber: 12
    }, this);
}
_s(StoreProvider, "qOlv9fR9viYRvTPx5uHPw+tYr4k=");
_c = StoreProvider;
var _c;
__turbopack_context__.k.register(_c, "StoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_adad3f34._.js.map