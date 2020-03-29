import {
    Request,
    Response,
    NextFunction
} from "express";
import {
    get,
    use,
    controller,
    post,
    bodyValidator
} from './decorators';

function logger( req: Request, res: Response, next: NextFunction ) {
    console.log('Request was made!!!');
    next();
}

@controller('/auth')
class LoginController {

    /**
     * This route for checking "Checking type thought property descriptors
     * */
    // @get('/')
    // add(a: number, b: number): number {
    //     return a + b;
    // }

    @get('/login')
    @use(logger)
    getLogin( req: Request, res: Response ): void {
        res.send(`
            <form method="POST">
                <div>
                    <label>Email</label>
                    <input name="email" type="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" />
                </div>
                <button>Submit</button>
            </form>
        `);
    }

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin( req: Request, res: Response ) {
        const { email, password } = req.body;
        if (email && password && email === 'hi@hi.com' && password === '123456') {
            req.session = { loggedIn: true };
            res.redirect('/')
        } else {
            res.send('Invalid email or password');
        }
    }

    @get('/logout')
    getLogout( req: Request, res: Response ) {
        req.session = undefined;
        res.redirect('/');
    }
}
