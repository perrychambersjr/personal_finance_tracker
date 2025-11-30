interface Config {
    port: number,
    nodeEnv: string;
}

console.log('PORT from env:', process.env.PORT);
console.log('process.env keys:', Object.keys(process.env).filter(k => k.includes('PORT') || k.includes('MONGO')));

const config: Config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || "development"
};

export default config;