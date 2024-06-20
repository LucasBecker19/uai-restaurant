export type CardProps = {
    icon: string;
    title: string;
    description: string;
    variant: CardPropsVariant;
};

export type CardPropsVariant = 'green-light' | 'green' | 'white';
