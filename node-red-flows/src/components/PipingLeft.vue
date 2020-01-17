<template>
    <div class="piping-left">
        <svg>
            <g class="piping-outline">
                <g class="piping-background">
                    <line 
                        x1="0" 
                        :y1="`${ initialTop }`" 
                        :x2="`${ pipingWidth }`" 
                        :y2="`${ initialTop }`" /> 
                    <line  
                        x1="0" 
                        :y1="`${ initialTop + pumpSpacing }`" 
                        :x2="`${ pipingWidth }`" 
                        :y2="`${ initialTop + pumpSpacing }`" /> 
                    <line  
                        x1="0" 
                        :y1="`${ initialTop + (pumpSpacing * 2) }`" 
                        :x2="`${ pipingWidth }`" 
                        :y2="`${ initialTop + ( pumpSpacing * 2) }`" /> 
                    <line  
                        :x1="`${ pipingWidth }`" 
                        :y1="`${ initialTop + ( pumpSpacing * 2) }`" 
                        :x2="`${ pipingWidth }`" 
                        :y2="`${ initialTop + ( pumpSpacing * 0.5 ) }`" /> 
                    <line  
                        :x1="`${ pipingWidth }`" 
                        :y1="`${ initialTop }`" 
                        :x2="`${ pipingWidth }`" 
                        :y2="`${ initialTop + ( pumpSpacing * 0.5 ) }`" /> 
                    <line  
                        :x1="`${ pipingWidth }`" 
                        :y1="`${ initialTop + ( pumpSpacing * 0.5 ) }`" 
                        :x2="`${ pipingWidth * 2 }`" 
                        :y2="`${ initialTop + ( pumpSpacing * 0.5 ) }`" /> 
                    <circle :cx="`${ pipingWidth }`" :cy="`${ initialTop }`" r="4" />
                    <circle :cx="`${ pipingWidth }`" :cy="`${ initialTop + ( pumpSpacing * 2) }`" r="4" />
                </g>
                <g class="piping-foreground">
                    <line  
                        x1="0" 
                        :y1="`${ initialTop }`" 
                        :x2="`${ pipingWidth }`" 
                        :y2="`${ initialTop }`" /> 
                    <line  
                        x1="0" 
                        :y1="`${ initialTop + pumpSpacing }`" 
                        :x2="`${ pipingWidth }`" 
                        :y2="`${ initialTop + pumpSpacing }`" /> 
                    <line  
                        x1="0" 
                        :y1="`${ initialTop + (pumpSpacing * 2) }`" 
                        :x2="`${ pipingWidth }`" 
                        :y2="`${ initialTop + ( pumpSpacing * 2) }`" /> 
                    <line  
                        :x1="`${ pipingWidth }`" 
                        :y1="`${ initialTop + ( pumpSpacing * 2) }`" 
                        :x2="`${ pipingWidth }`" 
                        :y2="`${ initialTop + ( pumpSpacing * 0.5 ) }`" /> 
                    <line  
                        :x1="`${ pipingWidth }`" 
                        :y1="`${ initialTop }`" 
                        :x2="`${ pipingWidth }`" 
                        :y2="`${ initialTop + ( pumpSpacing * 0.5 ) }`" /> 
                    <line  
                        :x1="`${ pipingWidth }`" 
                        :y1="`${ initialTop + ( pumpSpacing * 0.5 ) }`" 
                        :x2="`${ pipingWidth * 2 }`" 
                        :y2="`${ initialTop + ( pumpSpacing * 0.5 ) }`" /> 
                </g>

                
            </g>


            <g class="piping-active"
                    :class="`
                        ${ pump1.enable == true ? 'active-1' : '' }
                        ${ pump2.enable == true ? 'active-2' : '' }
                        ${ pump3.enable == true ? 'active-3' : '' }
                    `">
                <line id="piping-left-1" 
                    x1="0" 
                    :y1="`${ initialTop }`" 
                    :x2="`${ pipingWidth }`" 
                    :y2="`${ initialTop }`" /> 
                <line id="piping-left-2"  
                    x1="0" 
                    :y1="`${ initialTop + pumpSpacing }`" 
                    :x2="`${ pipingWidth }`" 
                    :y2="`${ initialTop + pumpSpacing }`" /> 
                <line id="piping-left-3"  
                    x1="0" 
                    :y1="`${ initialTop + (pumpSpacing * 2) }`" 
                    :x2="`${ pipingWidth }`" 
                    :y2="`${ initialTop + ( pumpSpacing * 2) }`" /> 

                
                <line id="piping-left-4" 
                    :x1="`${ pipingWidth }`" 
                    :y1="`${ initialTop }`" 
                    :x2="`${ pipingWidth }`" 
                    :y2="`${ initialTop + ( pumpSpacing * 0.5 ) }`" />
                <line id="piping-left-5" 
                    :x1="`${ pipingWidth }`" 
                    :y1="`${ initialTop + ( pumpSpacing * 1 ) }`" 
                    :x2="`${ pipingWidth }`" 
                    :y2="`${ initialTop + ( pumpSpacing * 0.5 ) }`" /> 

                <line id="piping-left-6" 
                    :x1="`${ pipingWidth }`" 
                    :y1="`${ initialTop + ( pumpSpacing * 2) }`" 
                    :x2="`${ pipingWidth }`" 
                    :y2="`${ initialTop + ( pumpSpacing * 0.5 ) }`" /> 

                <line id="piping-left-7" 
                    :x1="`${ pipingWidth }`" 
                    :y1="`${ initialTop + ( pumpSpacing * 0.5 ) }`" 
                    :x2="`${ pipingWidth * 2 }`" 
                    :y2="`${ initialTop + ( pumpSpacing * 0.5 ) }`" /> 
            </g>


        </svg>
    </div>
</template>


<script>
export default {
    name: 'LipingLeft',
    props: ['pump1', 'pump2', 'pump3'],
    data() {
        return {
            initialTop: 56,
            pumpTopPosition: 16,
            pumpSpacing: 72,
            pipingWidth: 80,
        }
    },
    methods: {
        check() {
            // console.log('piping: ', this.pumps);
        }
    }
}
</script>