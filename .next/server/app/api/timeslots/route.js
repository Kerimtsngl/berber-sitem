/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/timeslots/route";
exports.ids = ["app/api/timeslots/route"];
exports.modules = {

/***/ "(rsc)/./app/api/timeslots/route.ts":
/*!************************************!*\
  !*** ./app/api/timeslots/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/prisma */ \"(rsc)/./app/lib/prisma.ts\");\n\n\n// Her gün için 09:00-19:00 arası 30 dakikalık slotları üretir\nfunction generateSlots(date) {\n    const slots = [];\n    const startHour = 9;\n    const endHour = 19;\n    for(let hour = startHour; hour < endHour; hour++){\n        for(let min = 0; min < 60; min += 30){\n            const start = new Date(date);\n            start.setHours(hour, min, 0, 0);\n            const end = new Date(start);\n            end.setMinutes(start.getMinutes() + 30);\n            slots.push({\n                start,\n                end\n            });\n        }\n    }\n    return slots;\n}\nasync function GET(req) {\n    // ?date=2024-06-01 gibi bir parametre ile istenirse o günün slotlarını döner\n    const { searchParams } = new URL(req.url);\n    const dateStr = searchParams.get(\"date\");\n    const date = dateStr ? new Date(dateStr) : new Date();\n    date.setHours(0, 0, 0, 0);\n    // O günün slotlarını üret\n    const slots = generateSlots(date);\n    // O günün mevcut randevularını çek\n    const startOfDay = new Date(date);\n    const endOfDay = new Date(date);\n    endOfDay.setHours(23, 59, 59, 999);\n    const appointments = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.appointment.findMany({\n        where: {\n            timeSlot: {\n                start: {\n                    gte: startOfDay,\n                    lte: endOfDay\n                }\n            }\n        },\n        include: {\n            timeSlot: true\n        }\n    });\n    // Slotların dolu olup olmadığını işaretle\n    const result = slots.map((slot)=>{\n        const isBooked = appointments.some((a)=>new Date(a.timeSlot.start).getTime() === slot.start.getTime());\n        return {\n            id: slot.start.getTime(),\n            start: slot.start,\n            end: slot.end,\n            isBooked\n        };\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(result);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3RpbWVzbG90cy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFDZDtBQUUxQyw4REFBOEQ7QUFDOUQsU0FBU0UsY0FBY0MsSUFBVTtJQUMvQixNQUFNQyxRQUFRLEVBQUU7SUFDaEIsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxVQUFVO0lBQ2hCLElBQUssSUFBSUMsT0FBT0YsV0FBV0UsT0FBT0QsU0FBU0MsT0FBUTtRQUNqRCxJQUFLLElBQUlDLE1BQU0sR0FBR0EsTUFBTSxJQUFJQSxPQUFPLEdBQUk7WUFDckMsTUFBTUMsUUFBUSxJQUFJQyxLQUFLUDtZQUN2Qk0sTUFBTUUsUUFBUSxDQUFDSixNQUFNQyxLQUFLLEdBQUc7WUFDN0IsTUFBTUksTUFBTSxJQUFJRixLQUFLRDtZQUNyQkcsSUFBSUMsVUFBVSxDQUFDSixNQUFNSyxVQUFVLEtBQUs7WUFDcENWLE1BQU1XLElBQUksQ0FBQztnQkFBRU47Z0JBQU9HO1lBQUk7UUFDMUI7SUFDRjtJQUNBLE9BQU9SO0FBQ1Q7QUFFTyxlQUFlWSxJQUFJQyxHQUFnQjtJQUN4Qyw2RUFBNkU7SUFDN0UsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixJQUFJRyxHQUFHO0lBQ3hDLE1BQU1DLFVBQVVILGFBQWFJLEdBQUcsQ0FBQztJQUNqQyxNQUFNbkIsT0FBT2tCLFVBQVUsSUFBSVgsS0FBS1csV0FBVyxJQUFJWDtJQUMvQ1AsS0FBS1EsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHO0lBRXZCLDBCQUEwQjtJQUMxQixNQUFNUCxRQUFRRixjQUFjQztJQUU1QixtQ0FBbUM7SUFDbkMsTUFBTW9CLGFBQWEsSUFBSWIsS0FBS1A7SUFDNUIsTUFBTXFCLFdBQVcsSUFBSWQsS0FBS1A7SUFDMUJxQixTQUFTYixRQUFRLENBQUMsSUFBSSxJQUFJLElBQUk7SUFDOUIsTUFBTWMsZUFBZSxNQUFNeEIsK0NBQU1BLENBQUN5QixXQUFXLENBQUNDLFFBQVEsQ0FBQztRQUNyREMsT0FBTztZQUNMQyxVQUFVO2dCQUNScEIsT0FBTztvQkFBRXFCLEtBQUtQO29CQUFZUSxLQUFLUDtnQkFBUztZQUMxQztRQUNGO1FBQ0FRLFNBQVM7WUFBRUgsVUFBVTtRQUFLO0lBQzVCO0lBRUEsMENBQTBDO0lBQzFDLE1BQU1JLFNBQVM3QixNQUFNOEIsR0FBRyxDQUFDLENBQUNDO1FBQ3hCLE1BQU1DLFdBQVdYLGFBQWFZLElBQUksQ0FBQyxDQUFDQyxJQUNsQyxJQUFJNUIsS0FBSzRCLEVBQUVULFFBQVEsQ0FBQ3BCLEtBQUssRUFBRThCLE9BQU8sT0FBT0osS0FBSzFCLEtBQUssQ0FBQzhCLE9BQU87UUFFN0QsT0FBTztZQUNMQyxJQUFJTCxLQUFLMUIsS0FBSyxDQUFDOEIsT0FBTztZQUN0QjlCLE9BQU8wQixLQUFLMUIsS0FBSztZQUNqQkcsS0FBS3VCLEtBQUt2QixHQUFHO1lBQ2J3QjtRQUNGO0lBQ0Y7SUFFQSxPQUFPcEMscURBQVlBLENBQUN5QyxJQUFJLENBQUNSO0FBQzNCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEtlcmltXFxEZXNrdG9wXFxiZXJiZXIxXFxhcHBcXGFwaVxcdGltZXNsb3RzXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi9saWIvcHJpc21hXCI7XHJcblxyXG4vLyBIZXIgZ8O8biBpw6dpbiAwOTowMC0xOTowMCBhcmFzxLEgMzAgZGFraWthbMSxayBzbG90bGFyxLEgw7xyZXRpclxyXG5mdW5jdGlvbiBnZW5lcmF0ZVNsb3RzKGRhdGU6IERhdGUpIHtcclxuICBjb25zdCBzbG90cyA9IFtdO1xyXG4gIGNvbnN0IHN0YXJ0SG91ciA9IDk7XHJcbiAgY29uc3QgZW5kSG91ciA9IDE5O1xyXG4gIGZvciAobGV0IGhvdXIgPSBzdGFydEhvdXI7IGhvdXIgPCBlbmRIb3VyOyBob3VyKyspIHtcclxuICAgIGZvciAobGV0IG1pbiA9IDA7IG1pbiA8IDYwOyBtaW4gKz0gMzApIHtcclxuICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgc3RhcnQuc2V0SG91cnMoaG91ciwgbWluLCAwLCAwKTtcclxuICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUoc3RhcnQpO1xyXG4gICAgICBlbmQuc2V0TWludXRlcyhzdGFydC5nZXRNaW51dGVzKCkgKyAzMCk7XHJcbiAgICAgIHNsb3RzLnB1c2goeyBzdGFydCwgZW5kIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gc2xvdHM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0UmVxdWVzdCkge1xyXG4gIC8vID9kYXRlPTIwMjQtMDYtMDEgZ2liaSBiaXIgcGFyYW1ldHJlIGlsZSBpc3Rlbmlyc2UgbyBnw7xuw7xuIHNsb3RsYXLEsW7EsSBkw7ZuZXJcclxuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXEudXJsKTtcclxuICBjb25zdCBkYXRlU3RyID0gc2VhcmNoUGFyYW1zLmdldChcImRhdGVcIik7XHJcbiAgY29uc3QgZGF0ZSA9IGRhdGVTdHIgPyBuZXcgRGF0ZShkYXRlU3RyKSA6IG5ldyBEYXRlKCk7XHJcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuXHJcbiAgLy8gTyBnw7xuw7xuIHNsb3RsYXLEsW7EsSDDvHJldFxyXG4gIGNvbnN0IHNsb3RzID0gZ2VuZXJhdGVTbG90cyhkYXRlKTtcclxuXHJcbiAgLy8gTyBnw7xuw7xuIG1ldmN1dCByYW5kZXZ1bGFyxLFuxLEgw6dla1xyXG4gIGNvbnN0IHN0YXJ0T2ZEYXkgPSBuZXcgRGF0ZShkYXRlKTtcclxuICBjb25zdCBlbmRPZkRheSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gIGVuZE9mRGF5LnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XHJcbiAgY29uc3QgYXBwb2ludG1lbnRzID0gYXdhaXQgcHJpc21hLmFwcG9pbnRtZW50LmZpbmRNYW55KHtcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgIHRpbWVTbG90OiB7XHJcbiAgICAgICAgc3RhcnQ6IHsgZ3RlOiBzdGFydE9mRGF5LCBsdGU6IGVuZE9mRGF5IH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZTogeyB0aW1lU2xvdDogdHJ1ZSB9LFxyXG4gIH0pO1xyXG5cclxuICAvLyBTbG90bGFyxLFuIGRvbHUgb2x1cCBvbG1hZMSxxJ/EsW7EsSBpxZ9hcmV0bGVcclxuICBjb25zdCByZXN1bHQgPSBzbG90cy5tYXAoKHNsb3QpID0+IHtcclxuICAgIGNvbnN0IGlzQm9va2VkID0gYXBwb2ludG1lbnRzLnNvbWUoKGEpID0+XHJcbiAgICAgIG5ldyBEYXRlKGEudGltZVNsb3Quc3RhcnQpLmdldFRpbWUoKSA9PT0gc2xvdC5zdGFydC5nZXRUaW1lKClcclxuICAgICk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogc2xvdC5zdGFydC5nZXRUaW1lKCksIC8vIGJlbnplcnNpeiBpZCBvbGFyYWsgdGltZXN0YW1wXHJcbiAgICAgIHN0YXJ0OiBzbG90LnN0YXJ0LFxyXG4gICAgICBlbmQ6IHNsb3QuZW5kLFxyXG4gICAgICBpc0Jvb2tlZCxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihyZXN1bHQpO1xyXG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwcmlzbWEiLCJnZW5lcmF0ZVNsb3RzIiwiZGF0ZSIsInNsb3RzIiwic3RhcnRIb3VyIiwiZW5kSG91ciIsImhvdXIiLCJtaW4iLCJzdGFydCIsIkRhdGUiLCJzZXRIb3VycyIsImVuZCIsInNldE1pbnV0ZXMiLCJnZXRNaW51dGVzIiwicHVzaCIsIkdFVCIsInJlcSIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsImRhdGVTdHIiLCJnZXQiLCJzdGFydE9mRGF5IiwiZW5kT2ZEYXkiLCJhcHBvaW50bWVudHMiLCJhcHBvaW50bWVudCIsImZpbmRNYW55Iiwid2hlcmUiLCJ0aW1lU2xvdCIsImd0ZSIsImx0ZSIsImluY2x1ZGUiLCJyZXN1bHQiLCJtYXAiLCJzbG90IiwiaXNCb29rZWQiLCJzb21lIiwiYSIsImdldFRpbWUiLCJpZCIsImpzb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/timeslots/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/prisma.ts":
/*!***************************!*\
  !*** ./app/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\",\n        \"info\",\n        \"warn\",\n        \"error\"\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUVqQixNQUFNQyxTQUNYRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBSztRQUFDO1FBQVM7UUFBUTtRQUFRO0tBQVE7QUFDekMsR0FBRztBQUVMLElBQUlDLElBQXFDLEVBQUVKLGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxLZXJpbVxcRGVza3RvcFxcYmVyYmVyMVxcYXBwXFxsaWJcXHByaXNtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcmlzbWEgPVxyXG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHxcclxuICBuZXcgUHJpc21hQ2xpZW50KHtcclxuICAgIGxvZzogW1wicXVlcnlcIiwgXCJpbmZvXCIsIFwid2FyblwiLCBcImVycm9yXCJdLFxyXG4gIH0pO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTsgIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbCIsInByaXNtYSIsImxvZyIsInByb2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftimeslots%2Froute&page=%2Fapi%2Ftimeslots%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftimeslots%2Froute.ts&appDir=C%3A%5CUsers%5CKerim%5CDesktop%5Cberber1%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKerim%5CDesktop%5Cberber1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftimeslots%2Froute&page=%2Fapi%2Ftimeslots%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftimeslots%2Froute.ts&appDir=C%3A%5CUsers%5CKerim%5CDesktop%5Cberber1%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKerim%5CDesktop%5Cberber1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Kerim_Desktop_berber1_app_api_timeslots_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/timeslots/route.ts */ \"(rsc)/./app/api/timeslots/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/timeslots/route\",\n        pathname: \"/api/timeslots\",\n        filename: \"route\",\n        bundlePath: \"app/api/timeslots/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Kerim\\\\Desktop\\\\berber1\\\\app\\\\api\\\\timeslots\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Kerim_Desktop_berber1_app_api_timeslots_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ0aW1lc2xvdHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnRpbWVzbG90cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnRpbWVzbG90cyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNLZXJpbSU1Q0Rlc2t0b3AlNUNiZXJiZXIxJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNLZXJpbSU1Q0Rlc2t0b3AlNUNiZXJiZXIxJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNpQjtBQUM5RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcS2VyaW1cXFxcRGVza3RvcFxcXFxiZXJiZXIxXFxcXGFwcFxcXFxhcGlcXFxcdGltZXNsb3RzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS90aW1lc2xvdHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS90aW1lc2xvdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3RpbWVzbG90cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEtlcmltXFxcXERlc2t0b3BcXFxcYmVyYmVyMVxcXFxhcHBcXFxcYXBpXFxcXHRpbWVzbG90c1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftimeslots%2Froute&page=%2Fapi%2Ftimeslots%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftimeslots%2Froute.ts&appDir=C%3A%5CUsers%5CKerim%5CDesktop%5Cberber1%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKerim%5CDesktop%5Cberber1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftimeslots%2Froute&page=%2Fapi%2Ftimeslots%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftimeslots%2Froute.ts&appDir=C%3A%5CUsers%5CKerim%5CDesktop%5Cberber1%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKerim%5CDesktop%5Cberber1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();