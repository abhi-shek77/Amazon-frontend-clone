import formatCurrency from "../scripts/utils.js/money";

describe("test suite: formatCurrency", ()=>{
    it('convert cents into dollars', ()=>{
        expect(formatCurrency(2026)).isequal('20.26')
    });
});