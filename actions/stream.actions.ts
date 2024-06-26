"use server"

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from '@stream-io/node-sdk';

const apiKey = 'ewsszznxdcxb';
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async() =>{
    const user = await currentUser();

    if(!user) throw Error('user not found')
    if(!apiKey) throw Error('stream api key is missing');
    if(!apiSecret) throw Error('stream api secret is missing');

    const client = new StreamClient(apiKey, apiSecret)

    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const issued = Math.floor(Date.now() / 1000) - 60;

    const token = client.createToken(user.id, exp, issued)

    return token;
}