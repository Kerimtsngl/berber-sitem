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
exports.id = "app/api/messages/route";
exports.ids = ["app/api/messages/route"];
exports.modules = {

/***/ "(rsc)/./app/api/messages/route.ts":
/*!***********************************!*\
  !*** ./app/api/messages/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/prisma */ \"(rsc)/./app/lib/prisma.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/auth */ \"(rsc)/./app/lib/auth.ts\");\n\n\n\nasync function GET(req) {\n    const auth = req.headers.get(\"authorization\");\n    if (!auth) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Yetkisiz\"\n    }, {\n        status: 401\n    });\n    const token = auth.replace(\"Bearer \", \"\");\n    const payload = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.verifyToken)(token);\n    if (!payload) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Geçersiz token\"\n    }, {\n        status: 401\n    });\n    const { searchParams } = new URL(req.url);\n    const userId = searchParams.get(\"userId\");\n    let where = {};\n    if (userId === \"me\" || !userId) {\n        where = {\n            OR: [\n                {\n                    senderId: payload.id\n                },\n                {\n                    receiverId: payload.id\n                }\n            ]\n        };\n    } else {\n        // Sadece iki kullanıcı arasındaki mesajlar\n        where = {\n            OR: [\n                {\n                    senderId: payload.id,\n                    receiverId: Number(userId)\n                },\n                {\n                    senderId: Number(userId),\n                    receiverId: payload.id\n                }\n            ]\n        };\n    }\n    const messages = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.message.findMany({\n        where,\n        include: {\n            sender: true,\n            receiver: true\n        },\n        orderBy: {\n            createdAt: \"asc\"\n        }\n    });\n    // isMine flag'i ekle\n    const result = messages.map((m)=>({\n            ...m,\n            isMine: m.senderId === payload.id\n        }));\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(result);\n}\nasync function POST(req) {\n    const auth = req.headers.get(\"authorization\");\n    if (!auth) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Yetkisiz\"\n    }, {\n        status: 401\n    });\n    const token = auth.replace(\"Bearer \", \"\");\n    const payload = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.verifyToken)(token);\n    if (!payload) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Geçersiz token\"\n    }, {\n        status: 401\n    });\n    const senderId = payload.id;\n    const { receiverId, content } = await req.json();\n    if (!receiverId || !content) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Eksik veri\"\n        }, {\n            status: 400\n        });\n    }\n    const message = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.message.create({\n        data: {\n            senderId,\n            receiverId,\n            content\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(message, {\n        status: 201\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSTtBQUNsRCIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxLZXJpbVxcRGVza3RvcFxcYmVyYmVyMVxcYXBwXFxhcGlcXG1lc3NhZ2VzXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IHZlcmlmeVRva2VuIH0gZnJvbSBcIi4uLy4uL2xpYi9hdXRoXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICBjb25zdCBhdXRoID0gcmVxLmhlYWRlcnMuZ2V0KFwiYXV0aG9yaXphdGlvblwiKTtcclxuICBpZiAoIWF1dGgpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIllldGtpc2l6XCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICBjb25zdCB0b2tlbiA9IGF1dGgucmVwbGFjZShcIkJlYXJlciBcIiwgXCJcIik7XHJcbiAgY29uc3QgcGF5bG9hZCA9IHZlcmlmeVRva2VuKHRva2VuKTtcclxuICBpZiAoIXBheWxvYWQpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkdlw6dlcnNpeiB0b2tlblwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcblxyXG4gIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcS51cmwpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VySWRcIik7XHJcbiAgbGV0IHdoZXJlID0ge307XHJcbiAgaWYgKHVzZXJJZCA9PT0gXCJtZVwiIHx8ICF1c2VySWQpIHtcclxuICAgIHdoZXJlID0geyBPUjogW3sgc2VuZGVySWQ6IHBheWxvYWQuaWQgfSwgeyByZWNlaXZlcklkOiBwYXlsb2FkLmlkIH1dIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIFNhZGVjZSBpa2kga3VsbGFuxLFjxLEgYXJhc8SxbmRha2kgbWVzYWpsYXJcclxuICAgIHdoZXJlID0ge1xyXG4gICAgICBPUjogW1xyXG4gICAgICAgIHsgc2VuZGVySWQ6IHBheWxvYWQuaWQsIHJlY2VpdmVySWQ6IE51bWJlcih1c2VySWQpIH0sXHJcbiAgICAgICAgeyBzZW5kZXJJZDogTnVtYmVyKHVzZXJJZCksIHJlY2VpdmVySWQ6IHBheWxvYWQuaWQgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0IG1lc3NhZ2VzID0gYXdhaXQgcHJpc21hLm1lc3NhZ2UuZmluZE1hbnkoe1xyXG4gICAgd2hlcmUsXHJcbiAgICBpbmNsdWRlOiB7IHNlbmRlcjogdHJ1ZSwgcmVjZWl2ZXI6IHRydWUgfSxcclxuICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImFzY1wiIH0sXHJcbiAgfSk7XHJcbiAgLy8gaXNNaW5lIGZsYWcnaSBla2xlXHJcbiAgY29uc3QgcmVzdWx0ID0gbWVzc2FnZXMubWFwKG0gPT4gKHsgLi4ubSwgaXNNaW5lOiBtLnNlbmRlcklkID09PSBwYXlsb2FkLmlkIH0pKTtcclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocmVzdWx0KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xyXG4gIGNvbnN0IGF1dGggPSByZXEuaGVhZGVycy5nZXQoXCJhdXRob3JpemF0aW9uXCIpO1xyXG4gIGlmICghYXV0aCkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiWWV0a2lzaXpcIiB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gIGNvbnN0IHRva2VuID0gYXV0aC5yZXBsYWNlKFwiQmVhcmVyIFwiLCBcIlwiKTtcclxuICBjb25zdCBwYXlsb2FkID0gdmVyaWZ5VG9rZW4odG9rZW4pO1xyXG4gIGlmICghcGF5bG9hZCkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiR2XDp2Vyc2l6IHRva2VuXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICBjb25zdCBzZW5kZXJJZCA9IHBheWxvYWQuaWQ7XHJcbiAgY29uc3QgeyByZWNlaXZlcklkLCBjb250ZW50IH0gPSBhd2FpdCByZXEuanNvbigpO1xyXG4gIGlmICghcmVjZWl2ZXJJZCB8fCAhY29udGVudCkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRWtzaWsgdmVyaVwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBwcmlzbWEubWVzc2FnZS5jcmVhdGUoe1xyXG4gICAgZGF0YTogeyBzZW5kZXJJZCwgcmVjZWl2ZXJJZCwgY29udGVudCB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihtZXNzYWdlLCB7IHN0YXR1czogMjAxIH0pO1xyXG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwcmlzbWEiLCJ2ZXJpZnlUb2tlbiIsIkdFVCIsInJlcSIsImF1dGgiLCJoZWFkZXJzIiwiZ2V0IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwidG9rZW4iLCJyZXBsYWNlIiwicGF5bG9hZCIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsInVzZXJJZCIsIndoZXJlIiwiT1IiLCJzZW5kZXJJZCIsImlkIiwicmVjZWl2ZXJJZCIsIk51bWJlciIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsImZpbmRNYW55IiwiaW5jbHVkZSIsInNlbmRlciIsInJlY2VpdmVyIiwib3JkZXJCeSIsImNyZWF0ZWRBdCIsInJlc3VsdCIsIm1hcCIsIm0iLCJpc01pbmUiLCJQT1NUIiwiY29udGVudCIsImNyZWF0ZSIsImRhdGEiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/messages/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/auth.ts":
/*!*************************!*\
  !*** ./app/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comparePassword: () => (/* binding */ comparePassword),\n/* harmony export */   generateToken: () => (/* binding */ generateToken),\n/* harmony export */   hashPassword: () => (/* binding */ hashPassword),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst SECRET = process.env.JWT_SECRET || \"berber_secret\";\nasync function hashPassword(password) {\n    return await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 10);\n}\nasync function comparePassword(password, hash) {\n    return await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().compare(password, hash);\n}\nfunction generateToken(payload) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign(payload, SECRET, {\n        expiresIn: \"7d\"\n    });\n}\nfunction verifyToken(token) {\n    try {\n        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, SECRET);\n    } catch  {\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEI7QUFDQztBQUUvQixNQUFNRSxTQUFTQyxRQUFRQyxHQUFHLENBQUNDLFVBQVUsSUFBSTtBQUVsQyxlQUFlQyxhQUFhQyxRQUFnQjtJQUNqRCxPQUFPLE1BQU1QLG9EQUFXLENBQUNPLFVBQVU7QUFDckM7QUFFTyxlQUFlRSxnQkFBZ0JGLFFBQWdCLEVBQUVDLElBQVk7SUFDbEUsT0FBTyxNQUFNUix1REFBYyxDQUFDTyxVQUFVQztBQUN4QztBQUVPLFNBQVNHLGNBQWNDLE9BQWU7SUFDM0MsT0FBT1gsd0RBQVEsQ0FBQ1csU0FBU1YsUUFBUTtRQUFFWSxXQUFXO0lBQUs7QUFDckQ7QUFFTyxTQUFTQyxZQUFZQyxLQUFhO0lBQ3ZDLElBQUk7UUFDRixPQUFPZiwwREFBVSxDQUFDZSxPQUFPZDtJQUMzQixFQUFFLE9BQU07UUFDTixPQUFPO0lBQ1Q7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxLZXJpbVxcRGVza3RvcFxcYmVyYmVyMVxcYXBwXFxsaWJcXGF1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcblxyXG5jb25zdCBTRUNSRVQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUIHx8IFwiYmVyYmVyX3NlY3JldFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhc2hQYXNzd29yZChwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb21wYXJlUGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZywgaGFzaDogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCBoYXNoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVG9rZW4ocGF5bG9hZDogb2JqZWN0KSB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIFNFQ1JFVCwgeyBleHBpcmVzSW46IFwiN2RcIiB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRva2VuKHRva2VuOiBzdHJpbmcpOiB7IGlkOiBudW1iZXI7IHJvbGU6IHN0cmluZyB9IHwgbnVsbCB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBTRUNSRVQpIGFzIHsgaWQ6IG51bWJlcjsgcm9sZTogc3RyaW5nIH07XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn0gIl0sIm5hbWVzIjpbImJjcnlwdCIsImp3dCIsIlNFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiaGFzaFBhc3N3b3JkIiwicGFzc3dvcmQiLCJoYXNoIiwiY29tcGFyZVBhc3N3b3JkIiwiY29tcGFyZSIsImdlbmVyYXRlVG9rZW4iLCJwYXlsb2FkIiwic2lnbiIsImV4cGlyZXNJbiIsInZlcmlmeVRva2VuIiwidG9rZW4iLCJ2ZXJpZnkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/prisma.ts":
/*!***************************!*\
  !*** ./app/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\",\n        \"info\",\n        \"warn\",\n        \"error\"\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUVqQixNQUFNQyxTQUNYRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBSztRQUFDO1FBQVM7UUFBUTtRQUFRO0tBQVE7QUFDekMsR0FBRztBQUVMLElBQUlDLElBQXFDLEVBQUVKLGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxLZXJpbVxcRGVza3RvcFxcYmVyYmVyMVxcYXBwXFxsaWJcXHByaXNtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcmlzbWEgPVxyXG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHxcclxuICBuZXcgUHJpc21hQ2xpZW50KHtcclxuICAgIGxvZzogW1wicXVlcnlcIiwgXCJpbmZvXCIsIFwid2FyblwiLCBcImVycm9yXCJdLFxyXG4gIH0pO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTsgIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbCIsInByaXNtYSIsImxvZyIsInByb2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmessages%2Froute&page=%2Fapi%2Fmessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2Froute.ts&appDir=C%3A%5CUsers%5CKerim%5CDesktop%5Cberber1%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKerim%5CDesktop%5Cberber1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmessages%2Froute&page=%2Fapi%2Fmessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2Froute.ts&appDir=C%3A%5CUsers%5CKerim%5CDesktop%5Cberber1%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKerim%5CDesktop%5Cberber1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Kerim_Desktop_berber1_app_api_messages_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/messages/route.ts */ \"(rsc)/./app/api/messages/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/messages/route\",\n        pathname: \"/api/messages\",\n        filename: \"route\",\n        bundlePath: \"app/api/messages/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Kerim\\\\Desktop\\\\berber1\\\\app\\\\api\\\\messages\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Kerim_Desktop_berber1_app_api_messages_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZtZXNzYWdlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbWVzc2FnZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZtZXNzYWdlcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNLZXJpbSU1Q0Rlc2t0b3AlNUNiZXJiZXIxJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNLZXJpbSU1Q0Rlc2t0b3AlNUNiZXJiZXIxJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNnQjtBQUM3RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcS2VyaW1cXFxcRGVza3RvcFxcXFxiZXJiZXIxXFxcXGFwcFxcXFxhcGlcXFxcbWVzc2FnZXNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL21lc3NhZ2VzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbWVzc2FnZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL21lc3NhZ2VzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcS2VyaW1cXFxcRGVza3RvcFxcXFxiZXJiZXIxXFxcXGFwcFxcXFxhcGlcXFxcbWVzc2FnZXNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmessages%2Froute&page=%2Fapi%2Fmessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2Froute.ts&appDir=C%3A%5CUsers%5CKerim%5CDesktop%5Cberber1%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKerim%5CDesktop%5Cberber1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

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

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/bcryptjs","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmessages%2Froute&page=%2Fapi%2Fmessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2Froute.ts&appDir=C%3A%5CUsers%5CKerim%5CDesktop%5Cberber1%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKerim%5CDesktop%5Cberber1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();