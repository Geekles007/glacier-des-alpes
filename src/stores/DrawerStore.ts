import create from "zustand";
import {IDrawerStore} from "../models/IDrawerStore";

export const useDrawer = create<IDrawerStore>((set) => ({
    opened: false,
    switchValue: (value: boolean) => set((state) => ({ opened: value })),
}))
