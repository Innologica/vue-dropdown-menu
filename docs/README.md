# Dropdown menu

Universal dropdown menu component for Vue. Any element can be dropdown trigger and anything can be dropdown content.

Fully customizable - supports left/right opening, open on hover/click, interactive mode ...

## Installation

```shell
npm i @innologica/vue-dropdown-menu --save
```

or 

```shell
yarn add @innologica/vue-dropdown-menu
```

import to use:

```JS
import DropdownMenu from '@innologica/vue-dropdown-menu'
```

## Example

<DropdownMenuDemo/>

### Demo source

```vue
<dropdown-menu
        v-model="show"
        :right="right"
        :hover="hover"
        :interactive="interactive"
>
    <button class="btn btn-primary dropdown-toggle">
        Click to open dropdown
    </button>
    <div slot="dropdown">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
    </div>
</dropdown-menu>
```

## Props

| Prop        | Type           | Default  |Description  |
| ------------- |:-------------| -----|-----|
| value      | Boolean | false |Opens/closes the dropdown. The component uses v-model to control the state of the dropdown.|
| right      | Boolean | false |Whether to stick the dropdown on the right side of the element.|
| hover      | Boolean | false |If true the menu is open on hover (after hover_time) else it is open on click.|
| closeOnClickOutside      | Boolean | true |Should the menu close when clicked outside|
| hover_time      | Integer | false |Time before the menu opens in hover model. Default: 100ms|
| transition      | String | '' |The vue transition name used to open the menu. |

## Slots

### default 
This slot is the element that triggers the dropdown. It can be any HTML element, the components surrounds it with a div which handles the events like hover/click etc.

### dropdown 
This slot is the content of the dropdown menu.
