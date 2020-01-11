/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {


    let reduced = "";

    for (let i = 0; i < S.length; i++) {
        if (S[i] != '-') reduced += S[i];
    }
    let results = "";
    for (let i = reduced.length - 1; i >= 0; i--) {
        results = reduced[i] + results;
        if ((reduced.length - i) % K == 0 && i != 0) results = "-" + results;
    }

    return results.toUpperCase();
};