<template>
    <div class="py-4">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="show" id="show">
            <label class="form-check-label" for="show">show</label>
            <small class="text-muted">
                (boolean) toggle the dropdown
            </small>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="right" id="right">
            <label class="form-check-label" for="right">right</label>
            <small class="text-muted">
                (boolean) open menu on the right side of the element
            </small>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="hover" id="hover">
            <label class="form-check-label" for="hover">hover</label>
            <small class="text-muted">
                (boolean) open menu on hover (instead of click)
            </small>

        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="interactive" id="interactive">
            <label class="form-check-label" for="interactive">interactive</label>
            <small class="text-muted">
                (boolean) do not close the dropdown until clicked outside
            </small>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="closeOnClickOutside" id="closeOnClickOutside">
            <label class="form-check-label" for="closeOnClickOutside">closeOnClickOutside</label>
            <small class="text-muted">
                (boolean) do not close the dropdown WHEN clicked outside
            </small>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="transition" id="transition">
            <label class="form-check-label" for="transition">transition</label>
            <small class="text-muted">
                (string) the transition for the menu. If checked in the demo we use "translate-fade-down" which is added in the demo component.

                Below is the source of the css effect.
            </small>
            <details>
                <summary>translate-fade-down.css</summary>
                <pre style="color: white;">
/*translate fade (top to down)*/
.translate-fade-down-enter-active, .translate-fade-down-leave-active {
    transition: all 250ms;
    transition-timing-function: cubic-bezier(.53,2,.36,.85);
}
.translate-fade-down-enter, .translate-fade-down-leave-active {
    opacity: 0;
}
.translate-fade-down-enter, .translate-fade-down-leave-to {
    position: absolute;
}

.translate-fade-down-enter {
    transform: translateY(-10px);
}
.translate-fade-down-leave-active {
    transform: translateY(10px);
}
                </pre>
            </details>
        </div>


        <div class="py-4">
            <dropdown-menu
                    v-model="show"
                    :right="right"
                    :hover="hover"
                    :interactive="interactive"
                    :transition="transition ? 'translate-fade-down':''"
                    :closeOnClickOutside="closeOnClickOutside"
                    style="display: inline-block;"
            >
                <button class="btn btn-primary dropdown-toggle">Click to open dropdown</button>
                <div slot="dropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </dropdown-menu>
        </div>
    </div>
</template>

<script>
  import DropdownMenu from '../../../src/components/DropdownMenu'

  export default {
    name: "DropdownMenuDemo",
    components: {DropdownMenu},
    data () {
      return {
        show: false,
        right: false,
        hover: false,
        interactive: false,
        transition: false,
        closeOnClickOutside: true,
      }
    },
  }
</script>

<style>
    @import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
</style>

<style>
    /*translate fade (top to down)*/
    .translate-fade-down-enter-active, .translate-fade-down-leave-active {
        transition: all 250ms;
        transition-timing-function: cubic-bezier(.53,2,.36,.85);
    }
    .translate-fade-down-enter, .translate-fade-down-leave-active {
        opacity: 0;
    }
    .translate-fade-down-enter, .translate-fade-down-leave-to {
        position: absolute;
    }

    .translate-fade-down-enter {
        transform: translateY(-10px);
    }
    .translate-fade-down-leave-active {
        transform: translateY(10px);
    }
</style>