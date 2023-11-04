"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-move-base";
exports.ids = ["vendor-chunks/tsparticles-move-base"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-move-base/cjs/BaseMover.js":
/*!*************************************************************!*\
  !*** ./node_modules/tsparticles-move-base/cjs/BaseMover.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BaseMover = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nconst Utils_1 = __webpack_require__(/*! ./Utils */ \"(ssr)/./node_modules/tsparticles-move-base/cjs/Utils.js\");\nconst diffFactor = 2;\nclass BaseMover {\n    constructor() {\n        this._initSpin = (particle) => {\n            const container = particle.container, options = particle.options, spinOptions = options.move.spin;\n            if (!spinOptions.enable) {\n                return;\n            }\n            const spinPos = spinOptions.position ?? { x: 50, y: 50 }, spinCenter = {\n                x: (spinPos.x / 100) * container.canvas.size.width,\n                y: (spinPos.y / 100) * container.canvas.size.height,\n            }, pos = particle.getPosition(), distance = (0, tsparticles_engine_1.getDistance)(pos, spinCenter), spinAcceleration = (0, tsparticles_engine_1.getRangeValue)(spinOptions.acceleration);\n            particle.retina.spinAcceleration = spinAcceleration * container.retina.pixelRatio;\n            particle.spin = {\n                center: spinCenter,\n                direction: particle.velocity.x >= 0 ? \"clockwise\" : \"counter-clockwise\",\n                angle: particle.velocity.angle,\n                radius: distance,\n                acceleration: particle.retina.spinAcceleration,\n            };\n        };\n    }\n    init(particle) {\n        const options = particle.options, gravityOptions = options.move.gravity;\n        particle.gravity = {\n            enable: gravityOptions.enable,\n            acceleration: (0, tsparticles_engine_1.getRangeValue)(gravityOptions.acceleration),\n            inverse: gravityOptions.inverse,\n        };\n        this._initSpin(particle);\n    }\n    isEnabled(particle) {\n        return !particle.destroyed && particle.options.move.enable;\n    }\n    move(particle, delta) {\n        const particleOptions = particle.options, moveOptions = particleOptions.move;\n        if (!moveOptions.enable) {\n            return;\n        }\n        const container = particle.container, pxRatio = container.retina.pixelRatio, slowFactor = (0, Utils_1.getProximitySpeedFactor)(particle), baseSpeed = (particle.retina.moveSpeed ??= (0, tsparticles_engine_1.getRangeValue)(moveOptions.speed) * pxRatio) *\n            container.retina.reduceFactor, moveDrift = (particle.retina.moveDrift ??= (0, tsparticles_engine_1.getRangeValue)(particle.options.move.drift) * pxRatio), maxSize = (0, tsparticles_engine_1.getRangeMax)(particleOptions.size.value) * pxRatio, sizeFactor = moveOptions.size ? particle.getRadius() / maxSize : 1, moveSpeed = (baseSpeed * sizeFactor * slowFactor * (delta.factor || 1)) / diffFactor, maxSpeed = particle.retina.maxSpeed ?? container.retina.maxSpeed;\n        if (moveOptions.spin.enable) {\n            (0, Utils_1.spin)(particle, moveSpeed);\n        }\n        else {\n            (0, Utils_1.move)(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta);\n        }\n        (0, Utils_1.applyDistance)(particle);\n    }\n}\nexports.BaseMover = BaseMover;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtbW92ZS1iYXNlL2Nqcy9CYXNlTW92ZXIuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCO0FBQ2pCLDZCQUE2QixtQkFBTyxDQUFDLGdGQUFvQjtBQUN6RCxnQkFBZ0IsbUJBQU8sQ0FBQyx3RUFBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGNBQWM7QUFDcEU7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG90Zm9saW8vLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtbW92ZS1iYXNlL2Nqcy9CYXNlTW92ZXIuanM/MGQxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQmFzZU1vdmVyID0gdm9pZCAwO1xuY29uc3QgdHNwYXJ0aWNsZXNfZW5naW5lXzEgPSByZXF1aXJlKFwidHNwYXJ0aWNsZXMtZW5naW5lXCIpO1xuY29uc3QgVXRpbHNfMSA9IHJlcXVpcmUoXCIuL1V0aWxzXCIpO1xuY29uc3QgZGlmZkZhY3RvciA9IDI7XG5jbGFzcyBCYXNlTW92ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9pbml0U3BpbiA9IChwYXJ0aWNsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gcGFydGljbGUuY29udGFpbmVyLCBvcHRpb25zID0gcGFydGljbGUub3B0aW9ucywgc3Bpbk9wdGlvbnMgPSBvcHRpb25zLm1vdmUuc3BpbjtcbiAgICAgICAgICAgIGlmICghc3Bpbk9wdGlvbnMuZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3BpblBvcyA9IHNwaW5PcHRpb25zLnBvc2l0aW9uID8/IHsgeDogNTAsIHk6IDUwIH0sIHNwaW5DZW50ZXIgPSB7XG4gICAgICAgICAgICAgICAgeDogKHNwaW5Qb3MueCAvIDEwMCkgKiBjb250YWluZXIuY2FudmFzLnNpemUud2lkdGgsXG4gICAgICAgICAgICAgICAgeTogKHNwaW5Qb3MueSAvIDEwMCkgKiBjb250YWluZXIuY2FudmFzLnNpemUuaGVpZ2h0LFxuICAgICAgICAgICAgfSwgcG9zID0gcGFydGljbGUuZ2V0UG9zaXRpb24oKSwgZGlzdGFuY2UgPSAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0RGlzdGFuY2UpKHBvcywgc3BpbkNlbnRlciksIHNwaW5BY2NlbGVyYXRpb24gPSAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0UmFuZ2VWYWx1ZSkoc3Bpbk9wdGlvbnMuYWNjZWxlcmF0aW9uKTtcbiAgICAgICAgICAgIHBhcnRpY2xlLnJldGluYS5zcGluQWNjZWxlcmF0aW9uID0gc3BpbkFjY2VsZXJhdGlvbiAqIGNvbnRhaW5lci5yZXRpbmEucGl4ZWxSYXRpbztcbiAgICAgICAgICAgIHBhcnRpY2xlLnNwaW4gPSB7XG4gICAgICAgICAgICAgICAgY2VudGVyOiBzcGluQ2VudGVyLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogcGFydGljbGUudmVsb2NpdHkueCA+PSAwID8gXCJjbG9ja3dpc2VcIiA6IFwiY291bnRlci1jbG9ja3dpc2VcIixcbiAgICAgICAgICAgICAgICBhbmdsZTogcGFydGljbGUudmVsb2NpdHkuYW5nbGUsXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBkaXN0YW5jZSxcbiAgICAgICAgICAgICAgICBhY2NlbGVyYXRpb246IHBhcnRpY2xlLnJldGluYS5zcGluQWNjZWxlcmF0aW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaW5pdChwYXJ0aWNsZSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gcGFydGljbGUub3B0aW9ucywgZ3Jhdml0eU9wdGlvbnMgPSBvcHRpb25zLm1vdmUuZ3Jhdml0eTtcbiAgICAgICAgcGFydGljbGUuZ3Jhdml0eSA9IHtcbiAgICAgICAgICAgIGVuYWJsZTogZ3Jhdml0eU9wdGlvbnMuZW5hYmxlLFxuICAgICAgICAgICAgYWNjZWxlcmF0aW9uOiAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0UmFuZ2VWYWx1ZSkoZ3Jhdml0eU9wdGlvbnMuYWNjZWxlcmF0aW9uKSxcbiAgICAgICAgICAgIGludmVyc2U6IGdyYXZpdHlPcHRpb25zLmludmVyc2UsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2luaXRTcGluKHBhcnRpY2xlKTtcbiAgICB9XG4gICAgaXNFbmFibGVkKHBhcnRpY2xlKSB7XG4gICAgICAgIHJldHVybiAhcGFydGljbGUuZGVzdHJveWVkICYmIHBhcnRpY2xlLm9wdGlvbnMubW92ZS5lbmFibGU7XG4gICAgfVxuICAgIG1vdmUocGFydGljbGUsIGRlbHRhKSB7XG4gICAgICAgIGNvbnN0IHBhcnRpY2xlT3B0aW9ucyA9IHBhcnRpY2xlLm9wdGlvbnMsIG1vdmVPcHRpb25zID0gcGFydGljbGVPcHRpb25zLm1vdmU7XG4gICAgICAgIGlmICghbW92ZU9wdGlvbnMuZW5hYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gcGFydGljbGUuY29udGFpbmVyLCBweFJhdGlvID0gY29udGFpbmVyLnJldGluYS5waXhlbFJhdGlvLCBzbG93RmFjdG9yID0gKDAsIFV0aWxzXzEuZ2V0UHJveGltaXR5U3BlZWRGYWN0b3IpKHBhcnRpY2xlKSwgYmFzZVNwZWVkID0gKHBhcnRpY2xlLnJldGluYS5tb3ZlU3BlZWQgPz89ICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5nZXRSYW5nZVZhbHVlKShtb3ZlT3B0aW9ucy5zcGVlZCkgKiBweFJhdGlvKSAqXG4gICAgICAgICAgICBjb250YWluZXIucmV0aW5hLnJlZHVjZUZhY3RvciwgbW92ZURyaWZ0ID0gKHBhcnRpY2xlLnJldGluYS5tb3ZlRHJpZnQgPz89ICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5nZXRSYW5nZVZhbHVlKShwYXJ0aWNsZS5vcHRpb25zLm1vdmUuZHJpZnQpICogcHhSYXRpbyksIG1heFNpemUgPSAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0UmFuZ2VNYXgpKHBhcnRpY2xlT3B0aW9ucy5zaXplLnZhbHVlKSAqIHB4UmF0aW8sIHNpemVGYWN0b3IgPSBtb3ZlT3B0aW9ucy5zaXplID8gcGFydGljbGUuZ2V0UmFkaXVzKCkgLyBtYXhTaXplIDogMSwgbW92ZVNwZWVkID0gKGJhc2VTcGVlZCAqIHNpemVGYWN0b3IgKiBzbG93RmFjdG9yICogKGRlbHRhLmZhY3RvciB8fCAxKSkgLyBkaWZmRmFjdG9yLCBtYXhTcGVlZCA9IHBhcnRpY2xlLnJldGluYS5tYXhTcGVlZCA/PyBjb250YWluZXIucmV0aW5hLm1heFNwZWVkO1xuICAgICAgICBpZiAobW92ZU9wdGlvbnMuc3Bpbi5lbmFibGUpIHtcbiAgICAgICAgICAgICgwLCBVdGlsc18xLnNwaW4pKHBhcnRpY2xlLCBtb3ZlU3BlZWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgKDAsIFV0aWxzXzEubW92ZSkocGFydGljbGUsIG1vdmVPcHRpb25zLCBtb3ZlU3BlZWQsIG1heFNwZWVkLCBtb3ZlRHJpZnQsIGRlbHRhKTtcbiAgICAgICAgfVxuICAgICAgICAoMCwgVXRpbHNfMS5hcHBseURpc3RhbmNlKShwYXJ0aWNsZSk7XG4gICAgfVxufVxuZXhwb3J0cy5CYXNlTW92ZXIgPSBCYXNlTW92ZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-move-base/cjs/BaseMover.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-move-base/cjs/Utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles-move-base/cjs/Utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getProximitySpeedFactor = exports.applyPath = exports.spin = exports.move = exports.applyDistance = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nfunction applyDistance(particle) {\n    const initialPosition = particle.initialPosition, { dx, dy } = (0, tsparticles_engine_1.getDistances)(initialPosition, particle.position), dxFixed = Math.abs(dx), dyFixed = Math.abs(dy), { maxDistance } = particle.retina, hDistance = maxDistance.horizontal, vDistance = maxDistance.vertical;\n    if (!hDistance && !vDistance) {\n        return;\n    }\n    if (((hDistance && dxFixed >= hDistance) || (vDistance && dyFixed >= vDistance)) && !particle.misplaced) {\n        particle.misplaced = (!!hDistance && dxFixed > hDistance) || (!!vDistance && dyFixed > vDistance);\n        if (hDistance) {\n            particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;\n        }\n        if (vDistance) {\n            particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;\n        }\n    }\n    else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) {\n        particle.misplaced = false;\n    }\n    else if (particle.misplaced) {\n        const pos = particle.position, vel = particle.velocity;\n        if (hDistance && ((pos.x < initialPosition.x && vel.x < 0) || (pos.x > initialPosition.x && vel.x > 0))) {\n            vel.x *= -(0, tsparticles_engine_1.getRandom)();\n        }\n        if (vDistance && ((pos.y < initialPosition.y && vel.y < 0) || (pos.y > initialPosition.y && vel.y > 0))) {\n            vel.y *= -(0, tsparticles_engine_1.getRandom)();\n        }\n    }\n}\nexports.applyDistance = applyDistance;\nfunction move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta) {\n    applyPath(particle, delta);\n    const gravityOptions = particle.gravity, gravityFactor = gravityOptions?.enable && gravityOptions.inverse ? -1 : 1;\n    if (moveDrift && moveSpeed) {\n        particle.velocity.x += (moveDrift * delta.factor) / (60 * moveSpeed);\n    }\n    if (gravityOptions?.enable && moveSpeed) {\n        particle.velocity.y += (gravityFactor * (gravityOptions.acceleration * delta.factor)) / (60 * moveSpeed);\n    }\n    const decay = particle.moveDecay;\n    particle.velocity.multTo(decay);\n    const velocity = particle.velocity.mult(moveSpeed);\n    if (gravityOptions?.enable &&\n        maxSpeed > 0 &&\n        ((!gravityOptions.inverse && velocity.y >= 0 && velocity.y >= maxSpeed) ||\n            (gravityOptions.inverse && velocity.y <= 0 && velocity.y <= -maxSpeed))) {\n        velocity.y = gravityFactor * maxSpeed;\n        if (moveSpeed) {\n            particle.velocity.y = velocity.y / moveSpeed;\n        }\n    }\n    const zIndexOptions = particle.options.zIndex, zVelocityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.velocityRate;\n    velocity.multTo(zVelocityFactor);\n    const { position } = particle;\n    position.addTo(velocity);\n    if (moveOptions.vibrate) {\n        position.x += Math.sin(position.x * Math.cos(position.y));\n        position.y += Math.cos(position.y * Math.sin(position.x));\n    }\n}\nexports.move = move;\nfunction spin(particle, moveSpeed) {\n    const container = particle.container;\n    if (!particle.spin) {\n        return;\n    }\n    const updateFunc = {\n        x: particle.spin.direction === \"clockwise\" ? Math.cos : Math.sin,\n        y: particle.spin.direction === \"clockwise\" ? Math.sin : Math.cos,\n    };\n    particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle);\n    particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle);\n    particle.spin.radius += particle.spin.acceleration;\n    const maxCanvasSize = Math.max(container.canvas.size.width, container.canvas.size.height);\n    if (particle.spin.radius > maxCanvasSize / 2) {\n        particle.spin.radius = maxCanvasSize / 2;\n        particle.spin.acceleration *= -1;\n    }\n    else if (particle.spin.radius < 0) {\n        particle.spin.radius = 0;\n        particle.spin.acceleration *= -1;\n    }\n    particle.spin.angle += (moveSpeed / 100) * (1 - particle.spin.radius / maxCanvasSize);\n}\nexports.spin = spin;\nfunction applyPath(particle, delta) {\n    const particlesOptions = particle.options, pathOptions = particlesOptions.move.path, pathEnabled = pathOptions.enable;\n    if (!pathEnabled) {\n        return;\n    }\n    if (particle.lastPathTime <= particle.pathDelay) {\n        particle.lastPathTime += delta.value;\n        return;\n    }\n    const path = particle.pathGenerator?.generate(particle, delta);\n    if (path) {\n        particle.velocity.addTo(path);\n    }\n    if (pathOptions.clamp) {\n        particle.velocity.x = (0, tsparticles_engine_1.clamp)(particle.velocity.x, -1, 1);\n        particle.velocity.y = (0, tsparticles_engine_1.clamp)(particle.velocity.y, -1, 1);\n    }\n    particle.lastPathTime -= particle.pathDelay;\n}\nexports.applyPath = applyPath;\nfunction getProximitySpeedFactor(particle) {\n    return particle.slow.inRange ? particle.slow.factor : 1;\n}\nexports.getProximitySpeedFactor = getProximitySpeedFactor;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtbW92ZS1iYXNlL2Nqcy9VdGlscy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwrQkFBK0IsR0FBRyxpQkFBaUIsR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLHFCQUFxQjtBQUN6Ryw2QkFBNkIsbUJBQU8sQ0FBQyxnRkFBb0I7QUFDekQ7QUFDQSx3REFBd0QsU0FBUyxnSUFBZ0ksY0FBYztBQUMvTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvdGZvbGlvLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLW1vdmUtYmFzZS9janMvVXRpbHMuanM/YzlhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0UHJveGltaXR5U3BlZWRGYWN0b3IgPSBleHBvcnRzLmFwcGx5UGF0aCA9IGV4cG9ydHMuc3BpbiA9IGV4cG9ydHMubW92ZSA9IGV4cG9ydHMuYXBwbHlEaXN0YW5jZSA9IHZvaWQgMDtcbmNvbnN0IHRzcGFydGljbGVzX2VuZ2luZV8xID0gcmVxdWlyZShcInRzcGFydGljbGVzLWVuZ2luZVwiKTtcbmZ1bmN0aW9uIGFwcGx5RGlzdGFuY2UocGFydGljbGUpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb24gPSBwYXJ0aWNsZS5pbml0aWFsUG9zaXRpb24sIHsgZHgsIGR5IH0gPSAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0RGlzdGFuY2VzKShpbml0aWFsUG9zaXRpb24sIHBhcnRpY2xlLnBvc2l0aW9uKSwgZHhGaXhlZCA9IE1hdGguYWJzKGR4KSwgZHlGaXhlZCA9IE1hdGguYWJzKGR5KSwgeyBtYXhEaXN0YW5jZSB9ID0gcGFydGljbGUucmV0aW5hLCBoRGlzdGFuY2UgPSBtYXhEaXN0YW5jZS5ob3Jpem9udGFsLCB2RGlzdGFuY2UgPSBtYXhEaXN0YW5jZS52ZXJ0aWNhbDtcbiAgICBpZiAoIWhEaXN0YW5jZSAmJiAhdkRpc3RhbmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCgoaERpc3RhbmNlICYmIGR4Rml4ZWQgPj0gaERpc3RhbmNlKSB8fCAodkRpc3RhbmNlICYmIGR5Rml4ZWQgPj0gdkRpc3RhbmNlKSkgJiYgIXBhcnRpY2xlLm1pc3BsYWNlZCkge1xuICAgICAgICBwYXJ0aWNsZS5taXNwbGFjZWQgPSAoISFoRGlzdGFuY2UgJiYgZHhGaXhlZCA+IGhEaXN0YW5jZSkgfHwgKCEhdkRpc3RhbmNlICYmIGR5Rml4ZWQgPiB2RGlzdGFuY2UpO1xuICAgICAgICBpZiAoaERpc3RhbmNlKSB7XG4gICAgICAgICAgICBwYXJ0aWNsZS52ZWxvY2l0eS54ID0gcGFydGljbGUudmVsb2NpdHkueSAvIDIgLSBwYXJ0aWNsZS52ZWxvY2l0eS54O1xuICAgICAgICB9XG4gICAgICAgIGlmICh2RGlzdGFuY2UpIHtcbiAgICAgICAgICAgIHBhcnRpY2xlLnZlbG9jaXR5LnkgPSBwYXJ0aWNsZS52ZWxvY2l0eS54IC8gMiAtIHBhcnRpY2xlLnZlbG9jaXR5Lnk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoKCFoRGlzdGFuY2UgfHwgZHhGaXhlZCA8IGhEaXN0YW5jZSkgJiYgKCF2RGlzdGFuY2UgfHwgZHlGaXhlZCA8IHZEaXN0YW5jZSkgJiYgcGFydGljbGUubWlzcGxhY2VkKSB7XG4gICAgICAgIHBhcnRpY2xlLm1pc3BsYWNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXJ0aWNsZS5taXNwbGFjZWQpIHtcbiAgICAgICAgY29uc3QgcG9zID0gcGFydGljbGUucG9zaXRpb24sIHZlbCA9IHBhcnRpY2xlLnZlbG9jaXR5O1xuICAgICAgICBpZiAoaERpc3RhbmNlICYmICgocG9zLnggPCBpbml0aWFsUG9zaXRpb24ueCAmJiB2ZWwueCA8IDApIHx8IChwb3MueCA+IGluaXRpYWxQb3NpdGlvbi54ICYmIHZlbC54ID4gMCkpKSB7XG4gICAgICAgICAgICB2ZWwueCAqPSAtKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmdldFJhbmRvbSkoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodkRpc3RhbmNlICYmICgocG9zLnkgPCBpbml0aWFsUG9zaXRpb24ueSAmJiB2ZWwueSA8IDApIHx8IChwb3MueSA+IGluaXRpYWxQb3NpdGlvbi55ICYmIHZlbC55ID4gMCkpKSB7XG4gICAgICAgICAgICB2ZWwueSAqPSAtKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmdldFJhbmRvbSkoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuYXBwbHlEaXN0YW5jZSA9IGFwcGx5RGlzdGFuY2U7XG5mdW5jdGlvbiBtb3ZlKHBhcnRpY2xlLCBtb3ZlT3B0aW9ucywgbW92ZVNwZWVkLCBtYXhTcGVlZCwgbW92ZURyaWZ0LCBkZWx0YSkge1xuICAgIGFwcGx5UGF0aChwYXJ0aWNsZSwgZGVsdGEpO1xuICAgIGNvbnN0IGdyYXZpdHlPcHRpb25zID0gcGFydGljbGUuZ3Jhdml0eSwgZ3Jhdml0eUZhY3RvciA9IGdyYXZpdHlPcHRpb25zPy5lbmFibGUgJiYgZ3Jhdml0eU9wdGlvbnMuaW52ZXJzZSA/IC0xIDogMTtcbiAgICBpZiAobW92ZURyaWZ0ICYmIG1vdmVTcGVlZCkge1xuICAgICAgICBwYXJ0aWNsZS52ZWxvY2l0eS54ICs9IChtb3ZlRHJpZnQgKiBkZWx0YS5mYWN0b3IpIC8gKDYwICogbW92ZVNwZWVkKTtcbiAgICB9XG4gICAgaWYgKGdyYXZpdHlPcHRpb25zPy5lbmFibGUgJiYgbW92ZVNwZWVkKSB7XG4gICAgICAgIHBhcnRpY2xlLnZlbG9jaXR5LnkgKz0gKGdyYXZpdHlGYWN0b3IgKiAoZ3Jhdml0eU9wdGlvbnMuYWNjZWxlcmF0aW9uICogZGVsdGEuZmFjdG9yKSkgLyAoNjAgKiBtb3ZlU3BlZWQpO1xuICAgIH1cbiAgICBjb25zdCBkZWNheSA9IHBhcnRpY2xlLm1vdmVEZWNheTtcbiAgICBwYXJ0aWNsZS52ZWxvY2l0eS5tdWx0VG8oZGVjYXkpO1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gcGFydGljbGUudmVsb2NpdHkubXVsdChtb3ZlU3BlZWQpO1xuICAgIGlmIChncmF2aXR5T3B0aW9ucz8uZW5hYmxlICYmXG4gICAgICAgIG1heFNwZWVkID4gMCAmJlxuICAgICAgICAoKCFncmF2aXR5T3B0aW9ucy5pbnZlcnNlICYmIHZlbG9jaXR5LnkgPj0gMCAmJiB2ZWxvY2l0eS55ID49IG1heFNwZWVkKSB8fFxuICAgICAgICAgICAgKGdyYXZpdHlPcHRpb25zLmludmVyc2UgJiYgdmVsb2NpdHkueSA8PSAwICYmIHZlbG9jaXR5LnkgPD0gLW1heFNwZWVkKSkpIHtcbiAgICAgICAgdmVsb2NpdHkueSA9IGdyYXZpdHlGYWN0b3IgKiBtYXhTcGVlZDtcbiAgICAgICAgaWYgKG1vdmVTcGVlZCkge1xuICAgICAgICAgICAgcGFydGljbGUudmVsb2NpdHkueSA9IHZlbG9jaXR5LnkgLyBtb3ZlU3BlZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgekluZGV4T3B0aW9ucyA9IHBhcnRpY2xlLm9wdGlvbnMuekluZGV4LCB6VmVsb2NpdHlGYWN0b3IgPSAoMSAtIHBhcnRpY2xlLnpJbmRleEZhY3RvcikgKiogekluZGV4T3B0aW9ucy52ZWxvY2l0eVJhdGU7XG4gICAgdmVsb2NpdHkubXVsdFRvKHpWZWxvY2l0eUZhY3Rvcik7XG4gICAgY29uc3QgeyBwb3NpdGlvbiB9ID0gcGFydGljbGU7XG4gICAgcG9zaXRpb24uYWRkVG8odmVsb2NpdHkpO1xuICAgIGlmIChtb3ZlT3B0aW9ucy52aWJyYXRlKSB7XG4gICAgICAgIHBvc2l0aW9uLnggKz0gTWF0aC5zaW4ocG9zaXRpb24ueCAqIE1hdGguY29zKHBvc2l0aW9uLnkpKTtcbiAgICAgICAgcG9zaXRpb24ueSArPSBNYXRoLmNvcyhwb3NpdGlvbi55ICogTWF0aC5zaW4ocG9zaXRpb24ueCkpO1xuICAgIH1cbn1cbmV4cG9ydHMubW92ZSA9IG1vdmU7XG5mdW5jdGlvbiBzcGluKHBhcnRpY2xlLCBtb3ZlU3BlZWQpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBwYXJ0aWNsZS5jb250YWluZXI7XG4gICAgaWYgKCFwYXJ0aWNsZS5zcGluKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdXBkYXRlRnVuYyA9IHtcbiAgICAgICAgeDogcGFydGljbGUuc3Bpbi5kaXJlY3Rpb24gPT09IFwiY2xvY2t3aXNlXCIgPyBNYXRoLmNvcyA6IE1hdGguc2luLFxuICAgICAgICB5OiBwYXJ0aWNsZS5zcGluLmRpcmVjdGlvbiA9PT0gXCJjbG9ja3dpc2VcIiA/IE1hdGguc2luIDogTWF0aC5jb3MsXG4gICAgfTtcbiAgICBwYXJ0aWNsZS5wb3NpdGlvbi54ID0gcGFydGljbGUuc3Bpbi5jZW50ZXIueCArIHBhcnRpY2xlLnNwaW4ucmFkaXVzICogdXBkYXRlRnVuYy54KHBhcnRpY2xlLnNwaW4uYW5nbGUpO1xuICAgIHBhcnRpY2xlLnBvc2l0aW9uLnkgPSBwYXJ0aWNsZS5zcGluLmNlbnRlci55ICsgcGFydGljbGUuc3Bpbi5yYWRpdXMgKiB1cGRhdGVGdW5jLnkocGFydGljbGUuc3Bpbi5hbmdsZSk7XG4gICAgcGFydGljbGUuc3Bpbi5yYWRpdXMgKz0gcGFydGljbGUuc3Bpbi5hY2NlbGVyYXRpb247XG4gICAgY29uc3QgbWF4Q2FudmFzU2l6ZSA9IE1hdGgubWF4KGNvbnRhaW5lci5jYW52YXMuc2l6ZS53aWR0aCwgY29udGFpbmVyLmNhbnZhcy5zaXplLmhlaWdodCk7XG4gICAgaWYgKHBhcnRpY2xlLnNwaW4ucmFkaXVzID4gbWF4Q2FudmFzU2l6ZSAvIDIpIHtcbiAgICAgICAgcGFydGljbGUuc3Bpbi5yYWRpdXMgPSBtYXhDYW52YXNTaXplIC8gMjtcbiAgICAgICAgcGFydGljbGUuc3Bpbi5hY2NlbGVyYXRpb24gKj0gLTE7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcnRpY2xlLnNwaW4ucmFkaXVzIDwgMCkge1xuICAgICAgICBwYXJ0aWNsZS5zcGluLnJhZGl1cyA9IDA7XG4gICAgICAgIHBhcnRpY2xlLnNwaW4uYWNjZWxlcmF0aW9uICo9IC0xO1xuICAgIH1cbiAgICBwYXJ0aWNsZS5zcGluLmFuZ2xlICs9IChtb3ZlU3BlZWQgLyAxMDApICogKDEgLSBwYXJ0aWNsZS5zcGluLnJhZGl1cyAvIG1heENhbnZhc1NpemUpO1xufVxuZXhwb3J0cy5zcGluID0gc3BpbjtcbmZ1bmN0aW9uIGFwcGx5UGF0aChwYXJ0aWNsZSwgZGVsdGEpIHtcbiAgICBjb25zdCBwYXJ0aWNsZXNPcHRpb25zID0gcGFydGljbGUub3B0aW9ucywgcGF0aE9wdGlvbnMgPSBwYXJ0aWNsZXNPcHRpb25zLm1vdmUucGF0aCwgcGF0aEVuYWJsZWQgPSBwYXRoT3B0aW9ucy5lbmFibGU7XG4gICAgaWYgKCFwYXRoRW5hYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwYXJ0aWNsZS5sYXN0UGF0aFRpbWUgPD0gcGFydGljbGUucGF0aERlbGF5KSB7XG4gICAgICAgIHBhcnRpY2xlLmxhc3RQYXRoVGltZSArPSBkZWx0YS52YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXRoID0gcGFydGljbGUucGF0aEdlbmVyYXRvcj8uZ2VuZXJhdGUocGFydGljbGUsIGRlbHRhKTtcbiAgICBpZiAocGF0aCkge1xuICAgICAgICBwYXJ0aWNsZS52ZWxvY2l0eS5hZGRUbyhwYXRoKTtcbiAgICB9XG4gICAgaWYgKHBhdGhPcHRpb25zLmNsYW1wKSB7XG4gICAgICAgIHBhcnRpY2xlLnZlbG9jaXR5LnggPSAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuY2xhbXApKHBhcnRpY2xlLnZlbG9jaXR5LngsIC0xLCAxKTtcbiAgICAgICAgcGFydGljbGUudmVsb2NpdHkueSA9ICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5jbGFtcCkocGFydGljbGUudmVsb2NpdHkueSwgLTEsIDEpO1xuICAgIH1cbiAgICBwYXJ0aWNsZS5sYXN0UGF0aFRpbWUgLT0gcGFydGljbGUucGF0aERlbGF5O1xufVxuZXhwb3J0cy5hcHBseVBhdGggPSBhcHBseVBhdGg7XG5mdW5jdGlvbiBnZXRQcm94aW1pdHlTcGVlZEZhY3RvcihwYXJ0aWNsZSkge1xuICAgIHJldHVybiBwYXJ0aWNsZS5zbG93LmluUmFuZ2UgPyBwYXJ0aWNsZS5zbG93LmZhY3RvciA6IDE7XG59XG5leHBvcnRzLmdldFByb3hpbWl0eVNwZWVkRmFjdG9yID0gZ2V0UHJveGltaXR5U3BlZWRGYWN0b3I7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-move-base/cjs/Utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-move-base/cjs/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles-move-base/cjs/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadBaseMover = void 0;\nconst BaseMover_1 = __webpack_require__(/*! ./BaseMover */ \"(ssr)/./node_modules/tsparticles-move-base/cjs/BaseMover.js\");\nasync function loadBaseMover(engine, refresh = true) {\n    await engine.addMover(\"base\", () => new BaseMover_1.BaseMover(), refresh);\n}\nexports.loadBaseMover = loadBaseMover;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtbW92ZS1iYXNlL2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQkFBcUI7QUFDckIsb0JBQW9CLG1CQUFPLENBQUMsZ0ZBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG90Zm9saW8vLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtbW92ZS1iYXNlL2Nqcy9pbmRleC5qcz9kN2FkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb2FkQmFzZU1vdmVyID0gdm9pZCAwO1xuY29uc3QgQmFzZU1vdmVyXzEgPSByZXF1aXJlKFwiLi9CYXNlTW92ZXJcIik7XG5hc3luYyBmdW5jdGlvbiBsb2FkQmFzZU1vdmVyKGVuZ2luZSwgcmVmcmVzaCA9IHRydWUpIHtcbiAgICBhd2FpdCBlbmdpbmUuYWRkTW92ZXIoXCJiYXNlXCIsICgpID0+IG5ldyBCYXNlTW92ZXJfMS5CYXNlTW92ZXIoKSwgcmVmcmVzaCk7XG59XG5leHBvcnRzLmxvYWRCYXNlTW92ZXIgPSBsb2FkQmFzZU1vdmVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-move-base/cjs/index.js\n");

/***/ })

};
;