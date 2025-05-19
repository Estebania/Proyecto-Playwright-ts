
export class LoginPageData {

    static get credentials() {

        return {
            userNames: {
                standarUser: 'standard_user',
                lockedOutUser: 'locked_out_user',
                probleUser: 'problem_user',
                performanceGlitchUser: 'performance_glitch_user'
            },
            password: 'secret_sauce'
        }
    }

}
