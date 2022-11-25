import create from "zustand";
import {IDrawerStore} from "../models/IDrawerStore";

export const useDrawer = create<IDrawerStore>((set) => ({
    opened: false,
    switchValue: () => set((state) => ({ opened: !state.opened })),
}))
