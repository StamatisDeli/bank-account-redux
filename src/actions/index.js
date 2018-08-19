export const withdraw = amount => ({
    type: "WITHDRAW",
    payload: amount
    });

export const bankruptcy = totalAmount => ({
    type: "BANKRUPTCY",
    payload: Number(totalAmount)
})
 