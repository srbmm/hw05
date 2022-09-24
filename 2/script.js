const StepCounter = {
    step: 0,
    increase: function (){
        this.step += 1
    },
    decrease: function (){
        this.step -= 1
    },
    reset: function (){
        this.step = 0
    },
    read: function (){
        console.log(this.step)
    },
}
StepCounter.increase()
StepCounter.increase()
StepCounter.increase()
StepCounter.increase()
StepCounter.read()
StepCounter.decrease()
StepCounter.read()
StepCounter.reset()
StepCounter.read()