import app from './server';
import { PORT } from './config';
app.listen(PORT, () => {
    // tslint:disable-next-line: no-console
    console.log('\x1b[32m%s\x1b[0m', '[Success]',`server running port ${PORT}`)
})