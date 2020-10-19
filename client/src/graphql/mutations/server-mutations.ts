import { gql } from '@apollo/client';

export const LOGIN_WITH_CREDENTIALS = gql`
	mutation LoginUser($email: String!, $password: String!) {
		loginWithCredentials(email: $email, password: $password) {
			user {
				id
				name
				email
				password
				investedBalance
				availableBalance
				totalBalance
				stocks(sortBy: "totalInvestedAdjustment") {
					id
					name
					symbol
					price
					quantity
					changePercent
					percentageOfThePortfolio
					totalInvested
					updatedAt
					score
					idealPercentageOfThePortfolio
					idealTotalInvested
					idealQuantity
					quantityAdjustment
					totalInvestedAdjustment
					status
				}
			}
			authToken
		}
	}
`;

export const LOGIN_WITH_GOOGLE = gql`
	mutation loginWithGoogle(
		$email: String!
		$name: String!
		$googleId: String!
	) {
		loginWithGoogle(email: $email, name: $name, googleId: $googleId) {
			user {
				id
				name
				email
				password
				investedBalance
				availableBalance
				totalBalance
				stocks(sortBy: "totalInvestedAdjustment") {
					id
					name
					symbol
					price
					quantity
					changePercent
					percentageOfThePortfolio
					totalInvested
					updatedAt
					score
					idealPercentageOfThePortfolio
					idealTotalInvested
					idealQuantity
					quantityAdjustment
					totalInvestedAdjustment
					status
				}
			}
			authToken
		}
	}
`;

export const REGISTER = gql`
	mutation Register($name: String!, $email: String!, $password: String!) {
		register(name: $name, email: $email, password: $password) {
			user {
				id
				name
				email
				password
				investedBalance
				availableBalance
				totalBalance
				stocks(sortBy: "totalInvestedAdjustment") {
					id
					name
					symbol
					price
					quantity
					changePercent
					percentageOfThePortfolio
					totalInvested
					updatedAt
					score
					idealPercentageOfThePortfolio
					idealTotalInvested
					idealQuantity
					quantityAdjustment
					totalInvestedAdjustment
					status
				}
			}
			authToken
		}
	}
`;

export const CHANGE_USER_AVAILABLE_BALANCE = gql`
	mutation ChangeUserAvailableBalance(
		$id: String!
		$newAvailableBalance: Float!
	) {
		changeUserAvailableBalance(
			id: $id
			newAvailableBalance: $newAvailableBalance
		) {
			id
			name
			email
			password
			investedBalance
			availableBalance
			totalBalance
			stocks(sortBy: "totalInvestedAdjustment") {
				id
				name
				symbol
				price
				quantity
				changePercent
				percentageOfThePortfolio
				totalInvested
				updatedAt
				score
				idealPercentageOfThePortfolio
				idealTotalInvested
				idealQuantity
				quantityAdjustment
				totalInvestedAdjustment
				status
			}
		}
	}
`;

export const ADD_NEW_USER_STOCK = gql`
	mutation addNewUserStock(
		$userId: String!
		$symbol: String!
		$quantity: Float!
		$score: Float!
	) {
		addNewUserStock(
			userId: $userId
			symbol: $symbol
			quantity: $quantity
			score: $score
		) {
			id
			name
			email
			password
			investedBalance
			availableBalance
			totalBalance
			stocks(sortBy: "totalInvestedAdjustment") {
				id
				name
				symbol
				price
				quantity
				changePercent
				percentageOfThePortfolio
				totalInvested
				updatedAt
				score
				idealPercentageOfThePortfolio
				idealTotalInvested
				idealQuantity
				quantityAdjustment
				totalInvestedAdjustment
				status
			}
		}
	}
`;

export const ADD_EXISTING_USER_STOCK = gql`
	mutation addExistingUserStock(
		$userId: String!
		$symbol: String!
		$quantity: Float!
	) {
		addExistingUserStock(
			userId: $userId
			symbol: $symbol
			quantity: $quantity
		) {
			id
			name
			email
			password
			investedBalance
			availableBalance
			totalBalance
			stocks(sortBy: "totalInvestedAdjustment") {
				id
				name
				symbol
				price
				quantity
				changePercent
				percentageOfThePortfolio
				totalInvested
				updatedAt
				score
				idealPercentageOfThePortfolio
				idealTotalInvested
				idealQuantity
				quantityAdjustment
				totalInvestedAdjustment
				status
			}
		}
	}
`;

export const EDIT_USER_STOCK = gql`
	mutation editUserStock(
		$userId: String!
		$stockId: String!
		$score: Float
		$quantity: Float
	) {
		editUserStock(
			userId: $userId
			stockId: $stockId
			score: $score
			quantity: $quantity
		) {
			id
			name
			email
			investedBalance
			availableBalance
			totalBalance
			stocks(sortBy: "totalInvestedAdjustment") {
				id
				name
				symbol
				price
				quantity
				changePercent
				percentageOfThePortfolio
				totalInvested
				updatedAt
				score
				idealPercentageOfThePortfolio
				idealTotalInvested
				idealQuantity
				quantityAdjustment
				totalInvestedAdjustment
				status
			}
		}
	}
`;

export const DELETE_USER_STOCK = gql`
	mutation deleteUserStock($userId: String!, $stockId: String!) {
		deleteUserStock(userId: $userId, stockId: $stockId) {
			id
			name
			email
			investedBalance
			availableBalance
			totalBalance
			stocks(sortBy: "totalInvestedAdjustment") {
				id
				name
				symbol
				price
				quantity
				changePercent
				percentageOfThePortfolio
				totalInvested
				updatedAt
				score
				idealPercentageOfThePortfolio
				idealTotalInvested
				idealQuantity
				quantityAdjustment
				totalInvestedAdjustment
				status
			}
		}
	}
`;
