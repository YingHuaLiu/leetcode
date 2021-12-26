//https://leetcode-cn.com/problems/add-two-numbers/
var addTwoNumbers = function(l1, l2) {
  let root=new ListNode(-1);
  let l3=root,carry=0;
  while(l1 || l2){
    let v1= l1?.val || 0,v2=l2?.val || 0;
    let sum=v1+v2+carry;
    l3.next=new ListNode(sum%10);
    carry=Math.floor(sum/10);
    l3=l3.next;
    if(l2){
      l2=l2.next;
    }
    if(l1){
      l1=l1.next;
    }
  }
  if(carry>0){
    l3.next=new ListNode(carry);
  }
  return root.next;
};
