import * as React from 'react';
import { useState, useContext } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_STOCK } from '../../graphql/mutations/server-mutations';
import { UserContext } from '../../contexts/user.context';

import StockPurchase from './stock-purchase.component';

export interface StockPurchaseContainerProps {}

const StockPurchaseContainer: React.FunctionComponent<StockPurchaseContainerProps> = () => {
	const [symbol, setSymbol] = useState('');
	const [quantity, setQuantity] = useState(1);

	const { updateCurrentUser } = useContext(UserContext);
	const [addStock] = useMutation(ADD_STOCK, {
		onCompleted: ({ addStock: user }) => updateCurrentUser(user),
	});

	const handleSymbolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSymbol(e.target.value);
	};

	const handleQuantityChange = (value: string | number | undefined) => {
		setQuantity(value as number);
	};

	const handleSubmit = () => {
		if (symbol)
			return addStock({
				variables: {
					withCost: true,
					symbol,
					quantity,
				},
			});
	};

	return (
		<StockPurchase
			symbol={symbol}
			quantity={quantity}
			handleSymbolChange={handleSymbolChange}
			handleQuantityChange={handleQuantityChange}
			handleSubmit={handleSubmit}
		/>
	);
};

export default StockPurchaseContainer;
