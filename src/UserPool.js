import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData={
    UserPoolId: "us-east-1_2nErCCJnl",
    ClientId: "2712iosied63rc2o6v1ig7sf0n"
}

export default new CognitoUserPool(poolData);