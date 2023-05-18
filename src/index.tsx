import React, { ReactNode } from 'react';

type MatchProps = {
  when: boolean,
  children: ReactNode,
}

export const Match: React.FC<MatchProps> = ({ when, children }) => (when ? <>{children}</> : null);

type SwitchProps = {
  children: React.ReactElement<MatchProps>[];
}

export const Switch: React.FC<SwitchProps> = ({ children }) => {
  const match = React.Children.toArray(children).find(child =>
    React.isValidElement<MatchProps>(child) && child.props.when
  ) as React.ReactElement | undefined;

  return match || <></>;
};

type ShowProps = {
  when: boolean;
  children: ReactNode;
}

const Show: React.FC<ShowProps> = ({ when, children }) => (when ? <>{children}</> : null);
