import React, { ReactNode } from 'react';
type MatchProps = {
    when: boolean;
    children: ReactNode;
};
export declare const Match: React.FC<MatchProps>;
type SwitchProps = {
    children: React.ReactElement<MatchProps>[];
};
export declare const Switch: React.FC<SwitchProps>;
export {};
