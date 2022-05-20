# InlineJS Animation Plugin

[![npm (scoped)](https://img.shields.io/npm/v/@benbraide/inlinejs-animation.svg)](https://www.npmjs.com/package/@benbraide/inlinejs-animation) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/minzip/@benbraide/inlinejs-animation.svg)](https://www.npmjs.com/package/@benbraide/inlinejs-animation)

This is a plugin for the [InlineJS Framework](https://github.com/benbraide/InlineJS), enabling animations.

## Install

- Grab source or distribution versions from `GitHub`
- Include script in your HTML file.


## CDNs

```html
<script  src="https://cdn.jsdelivr.net/npm/@benbraide/inlinejs-animation@1.x.x/dist/inlinejs-animation.js"></script>

<script  src="https://cdn.jsdelivr.net/npm/@benbraide/inlinejs-animation@1.x.x/dist/inlinejs-animation.min.js"></script>
```

## NPM Install

```
npm install @benbraide/inlinejs-animation
```

## Reference

Available directives:

| Directive | Description |
| --- | --- |
| [`x-transition`](#x-transition) | Enables setting and updating components used during animations. |
| [`x-animate`](#x-animate) | Enables a DOM element to be animated based on some conditions. |

Available magic properties:

| Property | Description |
| --- | --- |
| [`$animation`](#$animation) | Retrieve the specified component storage. |

### Directives
---

### `x-transition`

`x-transition` enables setting and updating components used during animations.

**Argument Keys**

`actor` sets or updates the animation logic. Example:

```html
<div x-transition:actor="$animation.opacity"></div>
<div x-transition:actor="'opacity'"></div>
```

> **Note:** You can specify an animation `name` as `string` or an animation actor object.

`ease` sets or updates the timing function used for the animation. Example:

```html
<div x-transition:ease="$animation.bounce"></div>
<div x-transition:ease="'bounce'"></div>
```

> **Note:** You can specify an ease `name` as `string` or an animation ease object.

`duration` sets or updates how long the animation takes to complete. Example:

```html
<div x-transition:duration="$animation.fast"></div>
<div x-transition:duration="450"></div>
<div x-transition:duration="'2s'"></div>
```

> **Note:** You can specify a time as `string` or an integer value in `milliseconds`.

`repeats` sets or updates how long the animation takes to complete. Example:

```html
<div x-transition:repeats="$animation.infinite"></div>
<div x-transition:repeats="9"></div>
```

`delay` sets or updates the cooldown period for repeating animations. Example:

```html
<div x-transition:delay="$animation.fast"></div>
<div x-transition:delay="450"></div>
<div x-transition:delay="'2s'"></div>
```

> **Note:** You can specify a time as `string` or an integer value in `milliseconds`.

`enter` binds to the "entry" event. The specified expression is evaluated when entering the animation. Example:

```html
<div x-transition:enter="console.log('Animation is ongoing')"></div>
```

`leave` binds to the "exit" event. The specified expression is evaluated when exiting the animation. Example:

```html
<div x-transition:leave="console.log('Animation is complete')"></div>
```

`canceled` binds to the "cancelation" event. The specified expression is evaluated when the animation is interrupted before completion. Example:

```html
<div x-transition:canceled="console.log('Animation is canceled')"></div>
```
> - `x-transition` used without an argument initializes the transition object with default values.
> - `x-transition` enables "transition-aware" directives to perform animations when applicable:
> `x-show`, `x-if`, `x-else`, and `x-each` are transition-aware.

> **Note:** You can still bind to the events via the `x-on` attribute. Example:
```html
<div x-on:transition-enter.join="console.log('Animation is ongoing')"></div>
```

### Magic Properties
---

### `$animation`

`$animation` exposes the following methods:

| Method | Description |
| --- | --- |
| `collect` | Returns the combination of two or more `actors` to work as a unit. Example: **`$animation.collect('zoom', $animation.spin)`**|

`$animation` will search for an `ease` object by name. The following is the default list of `ease` objects:

- `default`
- `linear`
- `back` `backIn` `backOut` `backInOut`
- `bounce` `bounceIn` `bounceOut` `bounceInOut`
- `circle` `circleIn` `circleOut` `circleInOut`
- `cubic` `cubicIn` `cubicOut` `cubicInOut`
- `elastic` `elasticIn` `elasticOut` `elasticInOut`
- `exponential` `exponentialIn` `exponentialOut` `exponentialInOut`
- `quadratic` `quadraticIn` `quadraticOut` `quadraticInOut`
- `quart` `quartIn` `quartOut` `quartInOut`
- `quint` `quintIn` `quintOut` `quintInOut`
- `sine` `sineIn` `sineOut` `sineInOut`

**Example:**
```html
<div x-transition:ease="$animation.elastic"></div>
<div x-transition:ease="$animation['elastic']"></div>
```

`$animation` will search for an `actor` object by name. The following is the default list of `actor` objects:

- `default`
- `null`
- `opacity`
- `width`
- `height`
- `zoom`
- `slideUp`
- `slideRight`
- `slideDown`
- `slideLeft`
- `spin`
- `flip`
- `toss`
- `pulse`
- `heartbeat`

**Example:**
```html
<div x-transition:actor="$animation.pulse"></div>
<div x-transition:actor="$animation['pulse']"></div>
```

`$animation` will search for an `creator` function by name. The following is the default list of `creator` functions:

- `bezier`
- `scale`
- `translate`
- `rotate`
- `scene`
- `shake`
- `vibrate`
- `rubberband`
- `jello`
- `tada`
- `swing`

**Example:**
```html
<div x-transition:actor="$animation.jello()"></div>
<div x-transition:actor="$animation['jello']()"></div>
```

`$animation` will search for a `duration` value by name. The following is the default list of `duration` values:

- `crawl (2000ms)`
- `slower (1000ms)`
- `slow (750ms)`
- `normal (500ms)`
- `fast (300ms)`
- `faster (200ms)`
- `swift (100ms)`

**Example:**
```html
<div x-transition:duration="$animation.slow"></div>
<div x-transition:duration="$animation['slow']"></div>
```

## Security

If you find a security vulnerability, please send an email to [benplaeska@gmail.com]()

`InlineJS` relies on a custom implementation using the `Function` object to evaluate its directives. Despite being more secure then `eval()`, its use is prohibited in some environments, such as Google Chrome App, using restrictive Content Security Policy (CSP).

If you use `InlineJS` in a website dealing with sensitive data and requiring [CSP](https://csp.withgoogle.com/docs/strict-csp.html), you need to include `unsafe-eval` in your policy. A robust policy correctly configured will help protecting your users when using personal or financial data.

Since a policy applies to all scripts in your page, it's important that other external libraries included in the website are carefully reviewed to ensure that they are trustworthy and they won't introduce any Cross Site Scripting vulnerability either using the `eval()` function or manipulating the DOM to inject malicious code in your page.

## License

Licensed under the MIT license, see [LICENSE.md](LICENSE.md) for details.
