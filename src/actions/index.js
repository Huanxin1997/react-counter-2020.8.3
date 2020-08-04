const actions = {
    increase: () => {
        return {
            type: "INCREASE"
        }
    },
    decrease: () => {
        return {
            type: "DECREASE"
        }
    },
    returnZero: () => {
        return {
            type: "RETURNZERO"
        }
    }
}

export default actions;