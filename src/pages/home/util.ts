
async function doSomeThing(data: any) {
    return {
        code: 0,
        msg: '',
    }
}

export default class Corp {
    static ErrorCode = {
        SUCCESS: 0,
        FAILED: 1,
    };

    async activeUser(inviteCode: any, code: any) {
        const result: any = await doSomeThing({
            invite_code: inviteCode,
            code,
        }).catch((err: Error) => {
            console.error('model: active user error: ', err);
            return err;
        });

        const { ErrorCode } = Corp;
        let returns: any = null;

        if (result && result?.code === ErrorCode.SUCCESS) {
            returns = {
                ret: ErrorCode.SUCCESS,
                data: result,
            };
        } else {
            console.log('model: active user error: ', result);
            returns = {
                ret: ErrorCode.FAILED,
                data: result,
            };
        }

        return new Promise(resolve => resolve(returns));
    }
}
