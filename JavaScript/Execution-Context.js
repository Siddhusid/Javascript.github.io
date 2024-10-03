// Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}
  let Number1 = 5;
  let Number2 = 3;
  let Result = addNumbers(Number1, Number2);
  console.log("The sum is: " + Result);
  
// Global Execution Context  
// Creation Phase
GlobalEcecutionContext= {
    LexicalEnvironment:{
        EnvironmentalRecord:{
            Type:"Declarative",
            Number1: undefined,
            Number2: undefined
        },
        Outer: "null",
        ThisBinding :"globalobject"
    },

    VariableEnvironment:{
        EnvironmentalRecord:{
            Type : "Declarative",
            Result: undefined
        },
        Outer: "null",
        ThisBinding : "globalObject"
    }

}
// Execution Phase
GlobalExecutionContext= {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: "Declarative",
            Number1: 5,
            Number2: 3
        },
        Outer: "null",
        ThisBinding:"globalObject"
    },
    VariableEnvironment:{
        EnvironmentRecord: {
            Type: "Declarative",
            Result: "8"
        },
        Outer: "null",
        ThisBinding : "globalObject"
    }
}
// End Of Global Execution Context

// Function Execution Context
// Creation Phase
FunctionExecutionContext={
    LexicalEnvironment:{
        EnvironmentRecord:{
            Type:"Declarative",
        },
        Outer: GlobalExecutionContext,
        ThisBinding: addNumbers()
    },
    VariableEnvironment:{
        EnvironmentRecord:{
            Type:"Declarative",
            
        },
        Outer: GlobalEcecutionContext,
        ThisBinding: addNumbers()
    }
}
// Execution Phase
FunctionExecutionContext={
    LexicalEnvironment:{
        EnvironmentRecord:{
            Type:"Declarative",
        },
        Outer: GlobalExecutionContext,
        ThisBinding: addNumbers()
    },
    VariableEnvironment:{
        EnvironmentRecord:{
            Type:"Declarative",
            addNumbers: a+b
        },
        Outer: GlobalEcecutionContext,
        ThisBinding: addNumbers()
    }
}
