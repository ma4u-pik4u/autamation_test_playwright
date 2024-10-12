import {myFixtureTest} from "../fixture/myFix.fixture";

myFixtureTest("some test", async ({name,surname})=>{
    console.log(name,surname)
});