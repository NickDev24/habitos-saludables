import { kv } from "@vercel/kv";
import fs from "fs";
import path from "path";
import { Opinion, Update } from "@/types";

// Check if we should use Vercel KV (Production) or Local File (Development)
const useRemoteKV = !!process.env.KV_REST_API_URL;

// Local storage for development (persistent on disk)
const LOCAL_STORAGE_PATH = path.join(process.cwd(), ".kv-local.json");

const getLocalData = (): Record<string, any> => {
    if (!fs.existsSync(LOCAL_STORAGE_PATH)) return {};
    try {
        return JSON.parse(fs.readFileSync(LOCAL_STORAGE_PATH, "utf-8"));
    } catch (e) {
        console.error("Error reading local storage:", e);
        return {};
    }
};

const setLocalData = (key: string, value: any) => {
    try {
        const data = getLocalData();
        data[key] = value;
        fs.writeFileSync(LOCAL_STORAGE_PATH, JSON.stringify(data, null, 2));
    } catch (e) {
        console.error("Error writing to local storage:", e);
    }
};

export const getOpinions = async (): Promise<Opinion[]> => {
    if (useRemoteKV) {
        return (await kv.get<Opinion[]>("opinions")) || [];
    }
    const data = getLocalData();
    return (data["opinions"] as Opinion[]) || [];
};

export const addOpinion = async (opinion: Opinion) => {
    const opinions = await getOpinions();
    const updated = [opinion, ...opinions];
    if (useRemoteKV) {
        await kv.set("opinions", updated);
    } else {
        setLocalData("opinions", updated);
    }
};

export const getUpdates = async (): Promise<Update[]> => {
    if (useRemoteKV) {
        return (await kv.get<Update[]>("updates")) || [];
    }
    const data = getLocalData();
    return (data["updates"] as Update[]) || [];
};

export const addUpdate = async (update: Update) => {
    const updates = await getUpdates();
    const updated = [update, ...updates];
    if (useRemoteKV) {
        await kv.set("updates", updated);
    } else {
        setLocalData("updates", updated);
    }
};

// Generic setter for the webhook
export const setUpdates = async (updates: Update[]) => {
    if (useRemoteKV) {
        await kv.set("updates", updates);
    } else {
        setLocalData("updates", updates);
    }
};

